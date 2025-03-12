// Basic functionality for the budget tracker
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all nav links and pages
      document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Show corresponding page
      const pageName = this.getAttribute('data-page');
      document.getElementById(`${pageName}-page`).classList.add('active');
    });
  });

  // Add Transaction Button Click Handler
  document.getElementById('add-transaction-btn').addEventListener('click', function() {
    // Remove active class from all nav links and pages
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show add transaction page
    document.getElementById('add-transaction-page').classList.add('active');
    
    // Update nav link
    document.querySelector('[data-page="add-transaction"]').classList.add('active');

    // Set default date to today
    document.getElementById('transaction-date').valueAsDate = new Date();
  });

  // Add Transaction Form Submit Handler
  document.getElementById('add-transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const type = document.getElementById('transaction-type').value;
    const category = document.getElementById('transaction-category').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const description = document.getElementById('transaction-description').value;
    const date = document.getElementById('transaction-date').value;
    
    addTransaction(type, category, amount, description, date);
    
    // Reset form
    this.reset();
    document.getElementById('transaction-date').valueAsDate = new Date();
    
    // Show success message
    alert('Transaction added successfully!');
    
    // Navigate back to dashboard
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelector('[data-page="dashboard"]').classList.add('active');
    document.getElementById('dashboard-page').classList.add('active');
  });

  // Initialize charts
  const ctx = document.getElementById('monthly-overview-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Income',
          data: Array(12).fill(0),
          backgroundColor: '#10b981'
        },
        {
          label: 'Expenses',
          data: Array(12).fill(0),
          backgroundColor: '#ef4444'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Store chart instance globally
  window.monthlyChart = chart;

  // Initialize UI
  updateUI();
});

// Store transactions in localStorage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Function to add a new transaction
function addTransaction(type, category, amount, description, date) {
  const transaction = {
    id: Date.now(),
    type,
    category,
    amount: parseFloat(amount),
    description,
    date: date || new Date().toISOString().split('T')[0]
  };
  
  transactions.push(transaction);
  saveTransactions();
  updateUI();
}

// Function to delete a transaction
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveTransactions();
  updateUI();
}

// Function to edit a transaction
function editTransaction(id, updates) {
  transactions = transactions.map(t => {
    if (t.id === id) {
      return { ...t, ...updates };
    }
    return t;
  });
  saveTransactions();
  updateUI();
}

// Function to save transactions to localStorage
function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function to calculate totals
function calculateTotals() {
  const totals = {
    income: 0,
    expenses: 0,
    balance: 0
  };

  transactions.forEach(t => {
    if (t.type === 'income') {
      totals.income += t.amount;
    } else {
      totals.expenses += t.amount;
    }
  });

  totals.balance = totals.income - totals.expenses;
  return totals;
}

// Function to get monthly data for chart
function getMonthlyData() {
  const data = {
    income: Array(12).fill(0),
    expenses: Array(12).fill(0)
  };

  transactions.forEach(t => {
    const month = new Date(t.date).getMonth();
    if (t.type === 'income') {
      data.income[month] += t.amount;
    } else {
      data.expenses[month] += t.amount;
    }
  });

  return data;
}

// Function to update the UI
function updateUI() {
  const totals = calculateTotals();
  
  // Update overview cards
  document.getElementById('total-income').textContent = `$${totals.income.toFixed(2)}`;
  document.getElementById('total-expenses').textContent = `$${totals.expenses.toFixed(2)}`;
  document.getElementById('total-balance').textContent = `$${totals.balance.toFixed(2)}`;
  
  // Update transactions list
  const transactionsList = document.getElementById('transactions-list');
  if (transactionsList) {
    transactionsList.innerHTML = '';
    
    transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(t => {
      const transactionEl = document.createElement('div');
      transactionEl.className = 'transaction-item';
      transactionEl.innerHTML = `
        <div class="transaction-details">
          <div class="category-icon">
            <i class="fas fa-${getCategoryIcon(t.category)}"></i>
          </div>
          <div class="transaction-info">
            <h4>${t.description}</h4>
            <span>${t.date} • ${t.category}</span>
          </div>
        </div>
        <div class="transaction-amount ${t.type === 'income' ? 'income' : 'expense'}">
          ${t.type === 'income' ? '+' : '-'}$${t.amount.toFixed(2)}
        </div>
        <div class="transaction-actions">
          <button class="action-btn" onclick="editTransactionForm(${t.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn" onclick="deleteTransaction(${t.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
      transactionsList.appendChild(transactionEl);
    });
  }
  
  // Update chart
  const monthlyData = getMonthlyData();
  if (window.monthlyChart) {
    window.monthlyChart.data.datasets[0].data = monthlyData.income;
    window.monthlyChart.data.datasets[1].data = monthlyData.expenses;
    window.monthlyChart.update();
  }
}

// Function to get icon for category
function getCategoryIcon(category) {
  const icons = {
    salary: 'money-bill-wave',
    freelance: 'laptop',
    investments: 'chart-line',
    food: 'utensils',
    transport: 'car',
    utilities: 'home',
    entertainment: 'film',
    shopping: 'shopping-bag',
    health: 'heartbeat',
    other: 'circle'
  };
  return icons[category.toLowerCase()] || 'circle';
}

// Function to show edit transaction form
function editTransactionForm(id) {
  const transaction = transactions.find(t => t.id === id);
  if (!transaction) return;

  document.getElementById('edit-transaction-id').value = transaction.id;
  document.getElementById('edit-transaction-type').value = transaction.type;
  document.getElementById('edit-transaction-category').value = transaction.category;
  document.getElementById('edit-transaction-amount').value = transaction.amount;
  document.getElementById('edit-transaction-description').value = transaction.description;
  document.getElementById('edit-transaction-date').value = transaction.date;

  document.getElementById('edit-transaction-modal').classList.add('active');
}

// Function to close edit modal
function closeEditModal() {
  document.getElementById('edit-transaction-modal').classList.remove('active');
}

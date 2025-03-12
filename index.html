<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Budget Tracker</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #475569;
            --light: #f8fafc;
            --dark: #1e293b;
            --danger: #ef4444;
            --success: #10b981;
            --warning: #f59e0b;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --transition: all 0.3s ease;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        
        body {
            background-color: var(--gray-100);
            color: var(--dark);
            line-height: 1.6;
        }
        
        header {
            background-color: var(--primary);
            color: white;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .header-content h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem 0;
        }
        
        @media (min-width: 768px) {
            .main-content {
                grid-template-columns: 300px 1fr;
            }
        }
        
        .sidebar {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
        }
        
        .overview-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
        }
        
        .card-title {
            font-size: 1rem;
            color: var(--secondary);
            margin-bottom: 0.5rem;
        }
        
        .card-value {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .income {
            color: var(--success);
        }
        
        .expense {
            color: var(--danger);
        }
        
        .total {
            color: var(--primary);
        }
        
        .btn {
            display: inline-block;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 0.25rem;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .btn:hover {
            background-color: var(--primary-dark);
        }
        
        .btn-block {
            display: block;
            width: 100%;
        }
        
        .sidebar-nav {
            list-style: none;
            margin-top: 1.5rem;
        }
        
        .sidebar-nav li {
            margin-bottom: 0.5rem;
        }
        
        .sidebar-nav a {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            border-radius: 0.25rem;
            color: var(--secondary);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .sidebar-nav a:hover, .sidebar-nav a.active {
            background-color: var(--gray-100);
            color: var(--primary);
        }
        
        .sidebar-nav a i {
            margin-right: 0.5rem;
            width: 20px;
            text-align: center;
        }
        
        .transactions-list {
            margin-top: 1.5rem;
        }
        
        .transaction-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            border-bottom: 1px solid var(--gray-200);
        }
        
        .transaction-item:last-child {
            border-bottom: none;
        }
        
        .transaction-details {
            display: flex;
            align-items: center;
        }
        
        .category-icon {
            width: 36px;
            height: 36px;
            background-color: var(--gray-200);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.75rem;
        }
        
        .transaction-info h4 {
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .transaction-info span {
            font-size: 0.75rem;
            color: var(--gray-400);
        }
        
        .transaction-amount {
            font-weight: 500;
        }
        
        .transaction-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .action-btn {
            background-color: transparent;
            border: none;
            color: var(--gray-400);
            cursor: pointer;
            font-size: 0.875rem;
            transition: var(--transition);
        }
        
        .action-btn:hover {
            color: var(--primary);
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.25rem;
            font-size: 0.875rem;
            color: var(--secondary);
        }
        
        .form-control {
            width: 100%;
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--gray-300);
            border-radius: 0.25rem;
            font-size: 0.875rem;
            transition: var(--transition);
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        
        .form-select {
            width: 100%;
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--gray-300);
            border-radius: 0.25rem;
            background-color: white;
        }
        
        .form-select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
        }
        
        .modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 0.5rem;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-20px);
            transition: var(--transition);
        }
        
        .modal.active .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid var(--gray-200);
        }
        
        .modal-title {
            font-size: 1.125rem;
            font-weight: 600;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--gray-400);
            transition: var(--transition);
        }
        
        .modal-close:hover {
            color: var(--danger);
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            padding: 1rem 1.5rem;
            border-top: 1px solid var(--gray-200);
            gap: 0.5rem;
        }
        
        .btn-secondary {
            background-color: var(--gray-200);
            color: var(--dark);
        }
        
        .btn-secondary:hover {
            background-color: var(--gray-300);
        }
        
        .btn-danger {
            background-color: var(--danger);
        }
        
        .btn-danger:hover {
            background-color: #dc2626;
        }
        
        .tab-nav {
            display: flex;
            border-bottom: 1px solid var(--gray-300);
            margin-bottom: 1.5rem;
        }
        
        .tab-link {
            padding: 0.75rem 1rem;
            border-bottom: 2px solid transparent;
            color: var(--secondary);
            text-decoration: none;
            transition: var(--transition);
            cursor: pointer;
        }
        
        .tab-link.active {
            color: var(--primary);
            border-bottom-color: var(--primary);
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .chart-container {
            height: 400px;
            margin-top: 1.5rem;
        }
        
        .alert {
            padding: 0.75rem 1rem;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        
        .alert-warning {
            background-color: rgba(245, 158, 11, 0.1);
            border: 1px solid rgba(245, 158, 11, 0.2);
            color: var(--warning);
        }
        
        .alert-warning i {
            margin-right: 0.5rem;
        }
        
        .categories-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .category-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .category-name {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        }
        
        .budget-progress {
            margin-top: 0.5rem;
        }
        
        .progress-bar {
            height: 6px;
            background-color: var(--gray-200);
            border-radius: 3px;
            overflow: hidden;
        }
        
        .progress-value {
            height: 100%;
            border-radius: 3px;
            background-color: var(--primary);
            transition: var(--transition);
        }
        
        .progress-value.warning {
            background-color: var(--warning);
        }
        
        .progress-value.danger {
            background-color: var(--danger);
        }
        
        .budget-info {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: var(--gray-400);
            margin-top: 0.25rem;
        }
        
        .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
        }
        
        .loading.active {
            opacity: 1;
            visibility: visible;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--gray-200);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s infinite linear;
        }
        
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
        
        .page {
            display: none;
        }
        
        .page.active {
            display: block;
        }
        
        #export-options {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .settings-section {
            margin-bottom: 2rem;
        }
        
        .settings-section h3 {
            margin-bottom: 1rem;
            font-size: 1.125rem;
            font-weight: 600;
        }
        
        .notification-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--gray-200);
        }
        
        .notification-info {
            flex: 1;
        }
        
        .notification-title {
            font-weight: 500;
            margin-bottom: 0.25rem;
        }
        
        .notification-desc {
            font-size: 0.875rem;
            color: var(--gray-400);
        }
        
        .switch {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 24px;
        }
        
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--gray-300);
            transition: .4s;
            border-radius: 24px;
        }
        
        .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        input:checked + .slider {
            background-color: var(--primary);
        }
        
        input:checked + .slider:before {
            transform: translateX(24px);
        }
        
        .sync-status {
            margin-top: 1rem;
            font-size: 0.875rem;
            color: var(--gray-400);
        }
        
        .date-range {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .date-range .form-group {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .date-range {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
        
        .error-message {
            color: var(--danger);
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <h1>Personal Budget Tracker</h1>
                <button id="sync-btn" class="btn">
                    <i class="fas fa-sync-alt"></i> Sync
                </button>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <div class="sidebar">
                <button id="add-transaction-btn" class="btn btn-block">
                    <i class="fas fa-plus"></i> Add Transaction
                </button>
                <ul class="sidebar-nav">
                    <li><a href="#" class="nav-link active" data-page="dashboard"><i class="fas fa-home"></i> Dashboard</a></li>
                    <li><a href="#" class="nav-link" data-page="transactions"><i class="fas fa-exchange-alt"></i> Transactions</a></li>
                    <li><a href="#" class="nav-link" data-page="add-transaction"><i class="fas fa-plus"></i> Add Transaction</a></li>
                    <li><a href="#" class="nav-link" data-page="categories"><i class="fas fa-tags"></i> Categories</a></li>
                    <li><a href="#" class="nav-link" data-page="reports"><i class="fas fa-chart-bar"></i> Reports</a></li>
                    <li><a href="#" class="nav-link" data-page="export"><i class="fas fa-file-export"></i> Export</a></li>
                    <li><a href="#" class="nav-link" data-page="settings"><i class="fas fa-cog"></i> Settings</a></li>
                </ul>
            </div>
            
            <div class="content">
                <!-- Dashboard Page -->
                <div id="dashboard-page" class="page active">
                    <div class="overview-cards">
                        <div class="card">
                            <h3 class="card-title">Total Income</h3>
                            <div id="total-income" class="card-value income">$0.00</div>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Total Expenses</h3>
                            <div id="total-expenses" class="card-value expense">$0.00</div>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Balance</h3>
                            <div id="total-balance" class="card-value total">$0.00</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3 class="card-title">Monthly Overview</h3>
                        <div class="chart-container">
                            <canvas id="monthly-overview-chart"></canvas>
                        </div>
                    </div>
                </div>
                
                <!-- Transactions Page -->
                <div id="transactions-page" class="page">
                    <div class="card">
                        <h3 class="card-title">Recent Transactions</h3>
                        <div id="transactions-list" class="transactions-list">
                            <!-- Transactions will be added here dynamically -->
                        </div>
                    </div>
                </div>
                
                <!-- Add Transaction Page -->
                <div id="add-transaction-page" class="page">
                    <div class="card">
                        <h3 class="card-title">Add New Transaction</h3>
                        <form id="add-transaction-form">
                            <div class="form-group">
                                <label class="form-label" for="transaction-type">Type</label>
                                <select class="form-select" id="transaction-type" required>
                                    <option value="">Select Type</option>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="transaction-category">Category</label>
                                <select class="form-select" id="transaction-category" required>
                                    <option value="">Select Category</option>
                                    <optgroup label="Income">
                                        <option value="salary">Salary</option>
                                        <option value="freelance">Freelance</option>
                                        <option value="investments">Investments</option>
                                    </optgroup>
                                    <optgroup label="Expenses">
                                        <option value="food">Food</option>
                                        <option value="transport">Transport</option>
                                        <option value="utilities">Utilities</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="shopping">Shopping</option>
                                        <option value="health">Health</option>
                                        <option value="other">Other</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="transaction-amount">Amount</label>
                                <input type="number" class="form-control" id="transaction-amount" min="0" step="0.01" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="transaction-description">Description</label>
                                <input type="text" class="form-control" id="transaction-description" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="transaction-date">Date</label>
                                <input type="date" class="form-control" id="transaction-date" required>
                            </div>

                            <button type="submit" class="btn btn-block">Add Transaction</button>
                        </form>
                    </div>
                </div>
                
                <!-- Edit Transaction Modal -->
                <div id="edit-transaction-modal" class="modal">
                    <div class="modal-content">
                        <h3>Edit Transaction</h3>
                        <form id="edit-transaction-form">
                            <input type="hidden" id="edit-transaction-id">
                            <div class="form-group">
                                <label class="form-label" for="edit-transaction-type">Type</label>
                                <select class="form-select" id="edit-transaction-type" required>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="edit-transaction-category">Category</label>
                                <select class="form-select" id="edit-transaction-category" required>
                                    <option value="">Select Category</option>
                                    <optgroup label="Income">
                                        <option value="salary">Salary</option>
                                        <option value="freelance">Freelance</option>
                                        <option value="investments">Investments</option>
                                    </optgroup>
                                    <optgroup label="Expenses">
                                        <option value="food">Food</option>
                                        <option value="transport">Transport</option>
                                        <option value="utilities">Utilities</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="shopping">Shopping</option>
                                        <option value="health">Health</option>
                                        <option value="other">Other</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="edit-transaction-amount">Amount</label>
                                <input type="number" class="form-control" id="edit-transaction-amount" min="0" step="0.01" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="edit-transaction-description">Description</label>
                                <input type="text" class="form-control" id="edit-transaction-description" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="edit-transaction-date">Date</label>
                                <input type="date" class="form-control" id="edit-transaction-date" required>
                            </div>

                            <div class="modal-actions">
                                <button type="submit" class="btn">Save Changes</button>
                                <button type="button" class="btn btn-secondary" onclick="closeEditModal()">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

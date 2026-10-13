// =========================================
// Grocery Stock Tracker
// =========================================



const manualInventoryForm =
    document.getElementById("manualInventoryForm");

const manualItemName =
    document.getElementById("manualItemName");

const manualCategory =
    document.getElementById("manualCategory");

const manualStockQuantity =
    document.getElementById("manualStockQuantity");

const manualUnit =
    document.getElementById("manualUnit");

const manualMinimumStock =
    document.getElementById("manualMinimumStock");

const manualReorderQuantity =
    document.getElementById("manualReorderQuantity");

const manualUnitPrice =
    document.getElementById("manualUnitPrice");

const manualNotes =
    document.getElementById("manualNotes");


const inventoryTableBody =
    document.getElementById("inventoryTableBody");

const reorderList =
    document.getElementById("reorderList");

const searchInput =
    document.getElementById("searchInput");

const filterCategory =
    document.getElementById("filterCategory");

const totalProducts =
    document.getElementById("totalProducts");

const lowStockCount =
    document.getElementById("lowStockCount");

const outOfStockCount =
    document.getElementById("outOfStockCount");

const orderCount =
    document.getElementById("orderCount");

const estimatedOrderCost =
    document.getElementById("estimatedOrderCost");

    const usageHistoryTableBody =
    document.getElementById("usageHistoryTableBody");

const clearUsageHistoryButton =
    document.getElementById("clearUsageHistoryButton");

    const shoppingList =
    document.getElementById("shoppingList");

const shoppingEstimatedTotal =
    document.getElementById("shoppingEstimatedTotal");

const addPurchasedStockButton =
    document.getElementById("addPurchasedStockButton");

    const shoppingStore =
    document.getElementById("shoppingStore");

    const purchaseHistoryTableBody =
    document.getElementById("purchaseHistoryTableBody");

const clearPurchaseHistoryButton =
    document.getElementById("clearPurchaseHistoryButton");

    const thisMonthSpend =
    document.getElementById("thisMonthSpend");

const lastMonthSpend =
    document.getElementById("lastMonthSpend");

const monthlySpendDifference =
    document.getElementById("monthlySpendDifference");

const mostExpensiveCategory =
    document.getElementById("mostExpensiveCategory");

const mostPurchasedItem =
    document.getElementById("mostPurchasedItem");

    const categorySpendingList =
    document.getElementById("categorySpendingList");

    const monthlySpendingChart =
    document.getElementById("monthlySpendingChart");

    const storePriceComparisonList =
    document.getElementById("storePriceComparisonList");

    // =========================================
// Service Visits
// =========================================

const serviceVisitForm =
    document.getElementById("serviceVisitForm");

const serviceProvider =
    document.getElementById("serviceProvider");

const serviceDate =
    document.getElementById("serviceDate");

const serviceItems =
    document.getElementById("serviceItems");

const serviceNotes =
    document.getElementById("serviceNotes");

const serviceVisitList =
    document.getElementById("serviceVisitList");

    const lastServiceDate =
    document.getElementById("lastServiceDate");

const previousServiceDate =
    document.getElementById("previousServiceDate");

const lastServiceInterval =
    document.getElementById("lastServiceInterval");

const averageServiceInterval =
    document.getElementById("averageServiceInterval");

    // =========================================
// Receipt Entry Elements
// =========================================

const receiptForm =
    document.getElementById("receiptForm");

const receiptDate =
    document.getElementById("receiptDate");

const receiptStore =
    document.getElementById("receiptStore");

const receiptItems =
    document.getElementById("receiptItems");

const addReceiptItemButton =
    document.getElementById("addReceiptItemButton");

const receiptTotal =
    document.getElementById("receiptTotal");

    // =========================================
// Add Receipt Item Row
// =========================================

function addReceiptItemRow() {

    const row =
        document.createElement("div");

    row.className =
        "receipt-item-row";

    row.innerHTML = `
        <div class="form-group">

            <label>
                Item
            </label>

            <input
                type="text"
                class="receipt-item-name"
                placeholder="Example: Milk"
                required
            >

        </div>


        <div class="form-group">

            <label>
                Category
            </label>

            <select
                class="receipt-item-category"
                required
            >

                <option value="">
                    Select Category
                </option>

                <option value="Dairy">
                    Dairy
                </option>

                <option value="Meat">
                    Meat
                </option>

                <option value="Fruit & Veg">
                    Fruit & Veg
                </option>

                <option value="Pantry">
                    Pantry
                </option>

                <option value="Frozen">
                    Frozen
                </option>

                <option value="Cleaning">
                    Cleaning
                </option>

                <option value="Toiletries">
                    Toiletries
                </option>

                <option value="Baby">
                    Baby
                </option>

                <option value="Other">
                    Other
                </option>

            </select>

        </div>


        <div class="form-group">

            <label>
                Packages
            </label>

            <input
                type="number"
                class="receipt-item-packages"
                min="1"
                step="1"
                value="1"
                required
            >

        </div>


        <div class="form-group">

            <label>
                Package Type
            </label>

            <select
                class="receipt-item-package-type"
                required
            >

                <option value="item">
                    Item
                </option>

                <option value="bag">
                    Bag
                </option>

                <option value="pack">
                    Pack
                </option>

                <option value="box">
                    Box
                </option>

                <option value="bottle">
                    Bottle
                </option>

                <option value="tin">
                    Tin
                </option>

                <option value="tray">
                    Tray
                </option>

            </select>

        </div>


        <div class="form-group">

            <label>
                Amount / Package
            </label>

            <input
                type="number"
                class="receipt-item-amount"
                min="1"
                step="1"
                value="1"
                required
            >

        </div>


        <div class="form-group">

            <label>
                Unit
            </label>

            <select
                class="receipt-item-unit"
                required
            >

                <option value="items">
                    items
                </option>

                <option value="kg">
                    kg
                </option>

                <option value="g">
                    g
                </option>

                <option value="litres">
                    litres
                </option>

                <option value="ml">
                    ml
                </option>

            </select>

        </div>


        <div class="form-group">

            <label>
                Price / Package
            </label>

            <input
                type="number"
                class="receipt-item-price"
                min="0"
                step="0.01"
                value="0"
                required
            >

        </div>


        <div class="receipt-line-total">
    R0.00
</div>

<div class="receipt-price-comparison">
    No previous price
</div>


        <button
            type="button"
            class="action-button receipt-remove-button"
        >
            Remove
        </button>
    `;

    receiptItems.appendChild(row);
}

addReceiptItemButton.addEventListener(
    "click",
    addReceiptItemRow
);

// =========================================
// Update Receipt Totals
// =========================================

function updateReceiptTotals() {

    const rows =
        document.querySelectorAll(
            ".receipt-item-row"
        );

    let total = 0;

    rows.forEach(function(row) {

        const packages =
            Number(
                row.querySelector(
                    ".receipt-item-packages"
                ).value
            ) || 0;

        const price =
            Number(
                row.querySelector(
                    ".receipt-item-price"
                ).value
            ) || 0;

        const lineTotal =
            packages * price;

        row.querySelector(
            ".receipt-line-total"
        ).textContent =
            `R${lineTotal.toFixed(2)}`;

            const itemName =
    row.querySelector(
        ".receipt-item-name"
    ).value.trim();

const amountPerPackage =
    Number(
        row.querySelector(
            ".receipt-item-amount"
        ).value
    ) || 0;

const unit =
    row.querySelector(
        ".receipt-item-unit"
    ).value;

const comparisonElement =
    row.querySelector(
        ".receipt-price-comparison"
    );


if (
    itemName &&
    amountPerPackage > 0 &&
    price > 0
) {

    const comparison =
        comparePurchasePrice(
            itemName,
            amountPerPackage,
            unit,
            price
        );


    if (comparison.found) {

        const percentage =
            Math.abs(
                comparison.percentageDifference
            ).toFixed(1);

        if (comparison.difference > 0) {

            comparisonElement.textContent =
                `${percentage}% more expensive than last purchase`;

        }

        else if (comparison.difference < 0) {

            comparisonElement.textContent =
                `${percentage}% cheaper than last purchase`;

        }

        else {

            comparisonElement.textContent =
                "Same price as last purchase";

        }

    }

    else {

        comparisonElement.textContent =
            "No previous price";

    }

}

else {

    comparisonElement.textContent =
        "No previous price";

}

        total += lineTotal;
        
    });

    receiptTotal.textContent =
        `R${total.toFixed(2)}`;
}

   

// =========================================
// Load Saved Groceries
// =========================================

let groceries =
    JSON.parse(localStorage.getItem("groceries")) || [];

    let usageHistory =
    JSON.parse(localStorage.getItem("usageHistory")) || [];

    let purchaseHistory =
    JSON.parse(localStorage.getItem("purchaseHistory")) || [];

    let serviceVisits =
    JSON.parse(localStorage.getItem("serviceVisits")) || [];


// =========================================
// Start App
// =========================================

renderApp();


// =========================================
// Save Groceries
// =========================================

function saveGroceries() {

    localStorage.setItem(
        "groceries",
        JSON.stringify(groceries)
    );

}

function saveUsageHistory() {

    localStorage.setItem(
        "usageHistory",
        JSON.stringify(usageHistory)
    );

}

function savePurchaseHistory() {

    localStorage.setItem(
        "purchaseHistory",
        JSON.stringify(purchaseHistory)
    );

}

function saveServiceVisits() {

    localStorage.setItem(
        "serviceVisits",
        JSON.stringify(serviceVisits)
    );

}

// =========================================
// Add Service Visit
// =========================================

serviceVisitForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newServiceVisit = {

        id: Date.now(),

        provider:
            serviceProvider.value.trim(),

        serviceDate:
            serviceDate.value,

        serviceItems:
            serviceItems.value.trim(),

        
        notes:
            serviceNotes.value.trim(),

        status:
    "Completed"
    };


    serviceVisits.push(newServiceVisit);

    saveServiceVisits();

    serviceVisitForm.reset();

    renderServiceVisits();

});

// =========================================
// Render Service Summary
// =========================================

function renderServiceSummary() {

    if (serviceVisits.length === 0) {

        lastServiceDate.textContent = "-";
        previousServiceDate.textContent = "-";
        lastServiceInterval.textContent = "-";
        averageServiceInterval.textContent = "-";

        return;
    }


    const sortedVisits =
        [...serviceVisits].sort(function(a, b) {

            return (
                new Date(b.serviceDate) -
                new Date(a.serviceDate)
            );

        });


    const latestVisit =
        sortedVisits[0];


    const latestDate =
        new Date(
            latestVisit.serviceDate + "T12:00:00"
        );


    lastServiceDate.textContent =
        latestDate.toLocaleDateString(
            "en-ZA",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );


    if (sortedVisits.length < 2) {

        previousServiceDate.textContent = "-";
        lastServiceInterval.textContent = "-";
        averageServiceInterval.textContent = "-";

        return;
    }


    const previousVisit =
        sortedVisits[1];


    const previousDate =
        new Date(
            previousVisit.serviceDate + "T12:00:00"
        );


    previousServiceDate.textContent =
        previousDate.toLocaleDateString(
            "en-ZA",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );


    const lastIntervalMilliseconds =
        latestDate - previousDate;


    const lastIntervalDays =
        Math.round(
            lastIntervalMilliseconds /
            (1000 * 60 * 60 * 24)
        );


    lastServiceInterval.textContent =
        `${lastIntervalDays} days`;


    const intervals = [];


    for (
        let i = 0;
        i < sortedVisits.length - 1;
        i++
    ) {

        const newerDate =
            new Date(
                sortedVisits[i].serviceDate +
                "T12:00:00"
            );

        const olderDate =
            new Date(
                sortedVisits[i + 1].serviceDate +
                "T12:00:00"
            );

        const differenceDays =
            Math.round(
                (newerDate - olderDate) /
                (1000 * 60 * 60 * 24)
            );

        intervals.push(differenceDays);

    }


    const averageInterval =
        intervals.reduce(
            function(total, days) {

                return total + days;

            },
            0
        ) / intervals.length;


    averageServiceInterval.textContent =
        `${Math.round(averageInterval)} days`;

}

// =========================================
// Render Service Visits
// =========================================

function renderServiceVisits() {

    if (serviceVisits.length === 0) {

        serviceVisitList.innerHTML = `
            <p class="empty-message">
                No completed service visits recorded yet.
            </p>
        `;

        return;
    }


    const sortedVisits =
    [...serviceVisits].sort(function(a, b) {

        return (
            new Date(b.serviceDate) -
            new Date(a.serviceDate)
        );

    });


    serviceVisitList.innerHTML = "";


    sortedVisits.forEach(function(visit, index) {

                const visitDate =
            new Date(
                visit.serviceDate + "T12:00:00"
            ).toLocaleDateString(
                "en-ZA",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );


        let daysSincePreviousService = null;

        if (index < sortedVisits.length - 1) {

            const currentDate =
                new Date(
                    visit.serviceDate + "T12:00:00"
                );

            const previousDate =
                new Date(
                    sortedVisits[index + 1].serviceDate +
                    "T12:00:00"
                );

            const differenceInMilliseconds =
                currentDate - previousDate;

            daysSincePreviousService =
                Math.round(
                    differenceInMilliseconds /
                    (1000 * 60 * 60 * 24)
                );
        }


        
        const div =
            document.createElement("div");

        div.className =
            "service-visit-item";


        div.innerHTML = `
            <div>
                <strong>
                    ${escapeHtml(visit.provider)}
                </strong>

                <p>
                    ${visitDate}
                </p>

                <p>
                    ${escapeHtml(visit.serviceItems)}
                </p>

                ${visit.notes ? `
    <p>
        <strong>Notes:</strong>
        ${escapeHtml(visit.notes)}
    </p>
` : ""}

${daysSincePreviousService !== null ? `
    <p>
        <strong>Previous service:</strong>
        ${daysSincePreviousService} days earlier
    </p>
` : ""}
            </div>

            <span class="status-badge status-good">
                ${escapeHtml(visit.status)}
            </span>
        `;


        serviceVisitList.appendChild(div);

    });

}


// =========================================
// Add Grocery Item
// =========================================



manualInventoryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const manualItem = {

        id: Date.now(),

        itemName:
            manualItemName.value.trim(),

        category:
            manualCategory.value,

        stockQuantity:
            Number(manualStockQuantity.value),

        unit:
            manualUnit.value,

        minimumStock:
            Number(manualMinimumStock.value),

        reorderQuantity:
            Number(manualReorderQuantity.value),

        unitPrice:
            Number(manualUnitPrice.value) || 0,

        lastPurchased:
            "",

        notes:
            manualNotes.value.trim(),

        totalUsed:
            0,

        inventorySource:
            "manual"
    };


    groceries.push(manualItem);

    saveGroceries();

    manualInventoryForm.reset();

    renderApp();

});


// =========================================
// Render Entire App
// =========================================

function renderApp() {

    renderInventory();
    renderUsageHistory();
    renderReorderList();
    renderShoppingList();
    renderSpendingDashboard();
    renderCategorySpending();
    renderMonthlySpendingChart();
    renderStorePriceComparison();
    renderPurchaseHistory();
    renderServiceSummary();
    renderServiceVisits();
    updateDashboard();

}


// =========================================
// Render Inventory
// =========================================

function renderInventory() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedCategory =
        filterCategory.value;


    const filteredGroceries =
        groceries.filter(function(item) {

            const matchesSearch =
                item.itemName
                    .toLowerCase()
                    .includes(searchTerm);

            const matchesCategory =
                selectedCategory === "all" ||
                item.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });


    if (filteredGroceries.length === 0) {

        inventoryTableBody.innerHTML = `
            <tr>
                <td
                    colspan="10"
                    class="empty-table-message"
                >
                    No grocery items found.
                </td>
            </tr>
        `;

        return;
    }


    inventoryTableBody.innerHTML = "";


    filteredGroceries.forEach(function(item) {

        const status =
            getStockStatus(item);

            const usageStats =
    getUsageStats(item);


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <div class="item-name">
                    ${escapeHtml(item.itemName)}
                </div>

                ${
                    item.notes
                        ? `
                            <div class="item-notes">
                                ${escapeHtml(item.notes)}
                            </div>
                        `
                        : ""
                }

            </td>


            <td>
                ${escapeHtml(item.category)}
            </td>


            <td>
                ${formatNumber(item.stockQuantity)}
                ${escapeHtml(item.unit)}
            </td>


            <td>
                ${formatNumber(item.minimumStock)}
                ${escapeHtml(item.unit)}
            </td>


            <td>
                ${formatNumber(item.totalUsed)}
                ${escapeHtml(item.unit)}
            </td>

            <td>

    ${
        usageStats.averageDailyUsage > 0
            ? `
                ${formatNumber(
                    usageStats.averageDailyUsage
                )}
                ${escapeHtml(item.unit)} / day
            `
            : "No data"
    }

</td>


<td>

    ${
        usageStats.estimatedDaysRemaining !== null
            ? `
                ${Math.ceil(
                    usageStats.estimatedDaysRemaining
                )} days
            `
            : "No data"
    }

</td>


            <td>
                <span
                    class="status-badge ${status.className}"
                >
                    ${status.label}
                </span>
            </td>


            <td>
                R${item.unitPrice.toFixed(2)}
            </td>


            <td>

                <div class="action-group">

                    <button
                        class="action-button"
                        onclick="useItem(${item.id})"
                    >
                        Use
                    </button>


                    <button
                        class="action-button"
                        onclick="addStock(${item.id})"
                    >
                        Add Stock
                    </button>


                    <button
                        class="action-button delete-button"
                        onclick="deleteItem(${item.id})"
                    >
                        Delete
                    </button>

                </div>

            </td>

        `;


        inventoryTableBody.appendChild(row);

    });

}

// =========================================
// Usage Statistics
// =========================================

function getUsageStats(item) {

    const itemHistory =
        usageHistory.filter(function(entry) {
            return entry.groceryId === item.id;
        });


    if (itemHistory.length === 0) {

        return {
            averageDailyUsage: 0,
            estimatedDaysRemaining: null
        };

    }


    const totalUsed =
        itemHistory.reduce(
            function(total, entry) {
                return total + Number(entry.amountUsed);
            },
            0
        );


    const dates =
        itemHistory.map(function(entry) {
            return new Date(entry.date);
        });


    const oldestDate =
        new Date(
            Math.min.apply(
                null,
                dates.map(function(date) {
                    return date.getTime();
                })
            )
        );


    const newestDate =
        new Date(
            Math.max.apply(
                null,
                dates.map(function(date) {
                    return date.getTime();
                })
            )
        );


    const differenceMilliseconds =
        newestDate - oldestDate;


    let numberOfDays =
        differenceMilliseconds /
        (1000 * 60 * 60 * 24);


    if (numberOfDays < 1) {
        numberOfDays = 1;
    }


    const averageDailyUsage =
        totalUsed / numberOfDays;


    let estimatedDaysRemaining = null;


    if (averageDailyUsage > 0) {

        estimatedDaysRemaining =
            item.stockQuantity /
            averageDailyUsage;

    }


    return {
        averageDailyUsage:
            averageDailyUsage,

        estimatedDaysRemaining:
            estimatedDaysRemaining
    };

}


// =========================================
// Stock Status
// =========================================

// =========================================
// Smart Stock Status
// =========================================

function getStockStatus(item) {

    const usageStats =
        getUsageStats(item);


    if (item.stockQuantity <= 0) {

        return {
            label: "Out of Stock",
            className: "status-out"
        };

    }


    if (item.stockQuantity <= item.minimumStock) {

        return {
            label: "Low Stock",
            className: "status-low"
        };

    }


    if (
        usageStats.estimatedDaysRemaining !== null &&
        usageStats.estimatedDaysRemaining <= 7
    ) {

        return {
            label: "Order Soon",
            className: "status-low"
        };

    }


    return {
        label: "In Stock",
        className: "status-good"
    };

}


// =========================================
// Use Item
// =========================================

function useItem(id) {

    const item =
        groceries.find(function(grocery) {
            return grocery.id === id;
        });


    if (!item) {
        return;
    }


    const amountUsed =
        prompt(
            `How much ${item.unit} of ${item.itemName} did you use?`,
            "1"
        );


    if (amountUsed === null) {
        return;
    }


    const amount =
        Number(amountUsed);


    if (
        Number.isNaN(amount) ||
        amount <= 0
    ) {

        alert("Please enter a valid amount.");

        return;
    }


    if (amount > item.stockQuantity) {

        alert(
            `You only have ${item.stockQuantity} ${item.unit} available.`
        );

        return;
    }


    item.stockQuantity -= amount;

    item.totalUsed += amount;

    usageHistory.unshift({

    id: Date.now(),

    groceryId: item.id,

    itemName: item.itemName,

    category: item.category,

    amountUsed: amount,

    unit: item.unit,

    remainingStock: item.stockQuantity,

    date: new Date().toISOString()

});

saveUsageHistory();


    saveGroceries();

    renderApp();

}

// =========================================
// Render Usage History
// =========================================

function renderUsageHistory() {

    if (usageHistory.length === 0) {

        usageHistoryTableBody.innerHTML = `
            <tr>
                <td
                    colspan="5"
                    class="empty-table-message"
                >
                    No usage history yet.
                </td>
            </tr>
        `;

        return;
    }


    usageHistoryTableBody.innerHTML = "";


    usageHistory.forEach(function(entry) {

        const row =
            document.createElement("tr");


        const formattedDate =
            new Date(entry.date)
                .toLocaleString("en-ZA", {

                    year: "numeric",
                    month: "short",
                    day: "numeric",

                    hour: "2-digit",
                    minute: "2-digit"

                });


        row.innerHTML = `

            <td>
                ${formattedDate}
            </td>


            <td>
                <strong>
                    ${escapeHtml(entry.itemName)}
                </strong>
            </td>


            <td>
                ${escapeHtml(entry.category)}
            </td>


            <td>
                ${formatNumber(entry.amountUsed)}
                ${escapeHtml(entry.unit)}
            </td>


            <td>
                ${formatNumber(entry.remainingStock)}
                ${escapeHtml(entry.unit)}
            </td>

        `;


        usageHistoryTableBody.appendChild(row);

    });

}


// =========================================
// Add Stock
// =========================================

function addStock(id) {

    const item =
        groceries.find(function(grocery) {
            return grocery.id === id;
        });


    if (!item) {
        return;
    }


    const amountAdded =
        prompt(
            `How much ${item.unit} of ${item.itemName} are you adding?`,
            item.reorderQuantity || 1
        );


    if (amountAdded === null) {
        return;
    }


    const amount =
        Number(amountAdded);


    if (
        Number.isNaN(amount) ||
        amount <= 0
    ) {

        alert("Please enter a valid amount.");

        return;
    }


    item.stockQuantity += amount;


    const newPrice =
        prompt(
            `Price per ${item.unit}?`,
            item.unitPrice
        );


    if (
        newPrice !== null &&
        newPrice !== ""
    ) {

        const price =
            Number(newPrice);

        if (!Number.isNaN(price)) {

            item.unitPrice = price;

        }

    }


    item.lastPurchased =
        new Date()
            .toISOString()
            .split("T")[0];


    saveGroceries();

    renderApp();

}


// =========================================
// Delete Item
// =========================================

function deleteItem(id) {

    const item =
        groceries.find(function(grocery) {
            return grocery.id === id;
        });


    if (!item) {
        return;
    }


    const confirmed =
        confirm(
            `Delete ${item.itemName} from your grocery tracker?`
        );


    if (!confirmed) {
        return;
    }


    groceries =
        groceries.filter(function(grocery) {
            return grocery.id !== id;
        });


    saveGroceries();

    renderApp();

}


// =========================================
// Render Reorder List
// =========================================

function renderReorderList() {

    const itemsToOrder =
        groceries
            .map(function(item) {

                const usageStats =
                    getUsageStats(item);

                let priority = null;
                let priorityLevel = 99;
                let reason = "";


                // ---------------------------------
                // Urgent
                // ---------------------------------

                if (item.stockQuantity <= 0) {

                    priority = "Urgent";
                    priorityLevel = 1;

                    reason =
                        "This item is out of stock.";

                }


                // ---------------------------------
                // High Priority
                // ---------------------------------

                else if (
                    item.stockQuantity <=
                    item.minimumStock
                ) {

                    priority = "High Priority";
                    priorityLevel = 2;

                    reason =
                        "Stock is at or below the minimum level.";

                }


                // ---------------------------------
                // Order Soon
                // ---------------------------------

                else if (
                    usageStats.estimatedDaysRemaining !== null &&
                    usageStats.estimatedDaysRemaining <= 7
                ) {

                    priority = "Order Soon";
                    priorityLevel = 3;

                    reason =
                        `Estimated ${Math.ceil(
                            usageStats.estimatedDaysRemaining
                        )} days of stock remaining.`;

                }


                return {

                    item: item,

                    usageStats:
                        usageStats,

                    priority:
                        priority,

                    priorityLevel:
                        priorityLevel,

                    reason:
                        reason

                };

            })


            // Only keep items that need attention
            .filter(function(entry) {

                return entry.priority !== null;

            })


            // Sort most urgent first
            .sort(function(a, b) {

                return (
                    a.priorityLevel -
                    b.priorityLevel
                );

            });


    if (itemsToOrder.length === 0) {

        reorderList.innerHTML = `
            <p class="empty-message">
                Nothing currently needs to be ordered.
            </p>
        `;

        return;
    }


    reorderList.innerHTML = "";


    itemsToOrder.forEach(function(entry) {

        const item =
            entry.item;


        const estimatedCost =
            item.reorderQuantity *
            item.unitPrice;


        const div =
            document.createElement("div");


        div.className =
            "reorder-item";


        div.innerHTML = `

            <div>

                <div class="reorder-priority">
                    ${escapeHtml(entry.priority)}
                </div>


                <h3>
                    ${escapeHtml(item.itemName)}
                </h3>


                <p>
                    ${escapeHtml(entry.reason)}
                </p>


                <p>
                    Current:
                    ${formatNumber(
                        item.stockQuantity
                    )}
                    ${escapeHtml(item.unit)}

                    |

                    Minimum:
                    ${formatNumber(
                        item.minimumStock
                    )}
                    ${escapeHtml(item.unit)}
                </p>


                <p>
                    Suggested order:
                    ${formatNumber(
                        item.reorderQuantity
                    )}
                    ${escapeHtml(item.unit)}
                </p>


                ${
                    entry.usageStats
                        .estimatedDaysRemaining !== null
                        ? `
                            <p>
                                Estimated stock remaining:
                                ${Math.ceil(
                                    entry.usageStats
                                        .estimatedDaysRemaining
                                )}
                                days
                            </p>
                        `
                        : ""
                }

            </div>


            <div class="reorder-cost">

                R${estimatedCost.toFixed(2)}

            </div>

        `;


        reorderList.appendChild(div);

    });

}

// =========================================
// Render Shopping List
// =========================================

function renderShoppingList() {

    const shoppingItems =
        groceries.filter(function(item) {

            const usageStats =
                getUsageStats(item);

            const lowStock =
                item.stockQuantity <=
                item.minimumStock;

            const runningOutSoon =
                usageStats.estimatedDaysRemaining !== null &&
                usageStats.estimatedDaysRemaining <= 7;

            return lowStock || runningOutSoon;

        });


    if (shoppingItems.length === 0) {

        shoppingList.innerHTML = `
            <p class="empty-message">
                No items currently need to be purchased.
            </p>
        `;

        shoppingEstimatedTotal.textContent =
            "R0.00";

        return;
    }


    shoppingList.innerHTML = "";


    shoppingItems.forEach(function(item) {

        const estimatedCost =
            item.reorderQuantity *
            item.unitPrice;


        const div =
            document.createElement("div");


        div.className =
            "shopping-item";


        div.innerHTML = `

            <input
                type="checkbox"
                class="shopping-checkbox"
                data-id="${item.id}"
            >


            <div class="shopping-item-info">

                <h3>
                    ${escapeHtml(item.itemName)}
                </h3>

                <p>
                    Suggested:
                    ${formatNumber(
                        item.reorderQuantity
                    )}
                    ${escapeHtml(item.unit)}
                </p>

                <p>
                    Current stock:
                    ${formatNumber(
                        item.stockQuantity
                    )}
                    ${escapeHtml(item.unit)}
                </p>

            </div>


            <div class="shopping-item-fields">

                <div>

                    <label>
                        Qty
                    </label>

                    <input
                        type="number"
                        class="shopping-quantity"
                        data-id="${item.id}"
                        min="0"
                        step="1"
                        value="${item.reorderQuantity}"
                    >

                </div>


                <div>

                    <label>
                        Price Each
                    </label>

                    <input
                        type="number"
                        class="shopping-price"
                        data-id="${item.id}"
                        min="0"
                        step="0.01"
                        value="${item.unitPrice.toFixed(2)}"
                    >

                </div>


                <strong
                    class="shopping-line-total"
                    data-id="${item.id}"
                >
                    R${estimatedCost.toFixed(2)}
                </strong>

            </div>

        `;


        shoppingList.appendChild(div);

    });


    attachShoppingListeners();

    updateShoppingTotal();

}

// =========================================
// Render Purchase History
// =========================================

function renderPurchaseHistory() {

    if (purchaseHistory.length === 0) {

        purchaseHistoryTableBody.innerHTML = `
            <tr>
                <td
                    colspan="8"
                    class="empty-table-message"
                >
                    No purchase history yet.
                </td>
            </tr>
        `;

        return;
    }


    purchaseHistoryTableBody.innerHTML = "";


    purchaseHistory.forEach(function(entry) {

        const row =
            document.createElement("tr");

            const comparison =
    getHistoryPriceComparison(entry);

let comparisonText =
    "No previous purchase";

if (comparison) {

    const percentage =
        Math.abs(
            comparison.percentage
        ).toFixed(1);

    if (comparison.difference > 0) {

        comparisonText =
            `Spent ${percentage}% more than previous purchase`;

    }

    else if (comparison.difference < 0) {

        comparisonText =
            `Spent ${percentage}% less than previous purchase`;

    }

    else {

        comparisonText =
            "Same as previous purchase";

    }
}


        const formattedDate =
            new Date(entry.date)
                .toLocaleString("en-ZA", {

                    year: "numeric",
                    month: "short",
                    day: "numeric",

                    hour: "2-digit",
                    minute: "2-digit"

                });


        row.innerHTML = `

            <td>
                ${formattedDate}
            </td>

            <td>
    <strong>
        ${escapeHtml(entry.itemName)}
    </strong>
</td>

<td>
    ${
        entry.storeName
            ? escapeHtml(entry.storeName)
            : "-"
    }
</td>

<td>
    ${escapeHtml(entry.category)}
</td>

            <td>
                ${
    entry.packagesBought && entry.packageType && entry.amountPerPackage
        ? `${formatNumber(entry.packagesBought)} ${escapeHtml(entry.packageType)} × ${formatNumber(entry.amountPerPackage)} ${escapeHtml(entry.unit)}`
        : `${formatNumber(entry.quantity)} ${escapeHtml(entry.unit)}`
}
            </td>

            <td>
                R${entry.priceEach.toFixed(2)}
            </td>

            <td>
                R${entry.totalCost.toFixed(2)}
            </td>

            <td>
    <span class="purchase-price-change">
        ${comparisonText}
    </span>
</td>

        `;


        purchaseHistoryTableBody.appendChild(row);

    });

}

// =========================================
// Render Spending Dashboard
// =========================================

function renderSpendingDashboard() {

    const now =
        new Date();


    const currentMonth =
        now.getMonth();


    const currentYear =
        now.getFullYear();


    let lastMonth =
        currentMonth - 1;


    let lastMonthYear =
        currentYear;


    if (lastMonth < 0) {

        lastMonth = 11;
        lastMonthYear--;

    }


    let thisMonthTotal = 0;

    let lastMonthTotal = 0;


    const categoryTotals = {};

    const itemTotals = {};


    purchaseHistory.forEach(function(entry) {

        const purchaseDate =
            new Date(entry.date);


        const purchaseMonth =
            purchaseDate.getMonth();


        const purchaseYear =
            purchaseDate.getFullYear();


        const totalCost =
            Number(entry.totalCost) || 0;


        // ---------------------------------
        // This Month
        // ---------------------------------

        if (
            purchaseMonth === currentMonth &&
            purchaseYear === currentYear
        ) {

            thisMonthTotal += totalCost;


            // Category totals

            if (!categoryTotals[entry.category]) {

                categoryTotals[entry.category] = 0;

            }


            categoryTotals[entry.category] +=
                totalCost;


            // Item totals

            if (!itemTotals[entry.itemName]) {

                itemTotals[entry.itemName] = 0;

            }


            itemTotals[entry.itemName] +=
                Number(entry.quantity) || 0;

        }


        // ---------------------------------
        // Last Month
        // ---------------------------------

        if (
            purchaseMonth === lastMonth &&
            purchaseYear === lastMonthYear
        ) {

            lastMonthTotal += totalCost;

        }

    });


    // =====================================
    // Difference
    // =====================================

    const difference =
        thisMonthTotal -
        lastMonthTotal;


    thisMonthSpend.textContent =
        `R${thisMonthTotal.toFixed(2)}`;


    lastMonthSpend.textContent =
        `R${lastMonthTotal.toFixed(2)}`;


    if (difference > 0) {

        monthlySpendDifference.textContent =
            `+R${difference.toFixed(2)}`;

    }

    else if (difference < 0) {

        monthlySpendDifference.textContent =
            `-R${Math.abs(difference).toFixed(2)}`;

    }

    else {

        monthlySpendDifference.textContent =
            "R0.00";

    }


    // =====================================
    // Most Expensive Category
    // =====================================

    const categoryEntries =
        Object.entries(categoryTotals);


    if (categoryEntries.length > 0) {

        categoryEntries.sort(
            function(a, b) {

                return b[1] - a[1];

            }
        );


        mostExpensiveCategory.textContent =
            categoryEntries[0][0];

    }

    else {

        mostExpensiveCategory.textContent =
            "-";

    }


    // =====================================
    // Most Purchased Item
    // =====================================

    const itemEntries =
        Object.entries(itemTotals);


    if (itemEntries.length > 0) {

        itemEntries.sort(
            function(a, b) {

                return b[1] - a[1];

            }
        );


        mostPurchasedItem.textContent =
            itemEntries[0][0];

    }

    else {

        mostPurchasedItem.textContent =
            "-";

    }

}

// =========================================
// Render Category Spending
// =========================================

function renderCategorySpending() {

    const now =
        new Date();

    const currentMonth =
        now.getMonth();

    const currentYear =
        now.getFullYear();


    const categoryTotals = {};


    purchaseHistory.forEach(function(entry) {

        const purchaseDate =
            new Date(entry.date);


        if (
            purchaseDate.getMonth() !== currentMonth ||
            purchaseDate.getFullYear() !== currentYear
        ) {
            return;
        }


        const category =
            entry.category || "Other";


        const totalCost =
            Number(entry.totalCost) || 0;


        if (!categoryTotals[category]) {

            categoryTotals[category] = 0;

        }


        categoryTotals[category] +=
            totalCost;

    });


    const entries =
        Object.entries(categoryTotals)
            .sort(function(a, b) {

                return b[1] - a[1];

            });


    if (entries.length === 0) {

        categorySpendingList.innerHTML = `
            <p class="empty-message">
                No category spending data yet.
            </p>
        `;

        return;
    }


    const highestAmount =
        entries[0][1];


    categorySpendingList.innerHTML = "";


    entries.forEach(function(entry) {

        const category =
            entry[0];

        const amount =
            entry[1];


        const percentage =
            highestAmount > 0
                ? (amount / highestAmount) * 100
                : 0;


        const div =
            document.createElement("div");


        div.className =
            "category-spending-item";


        div.innerHTML = `

            <div class="category-spending-name">
                ${escapeHtml(category)}
            </div>


            <div class="category-spending-bar">

                <div
                    class="category-spending-bar-fill"
                    style="width: ${percentage}%"
                ></div>

            </div>


            <div class="category-spending-total">
                R${amount.toFixed(2)}
            </div>

        `;


        categorySpendingList.appendChild(div);

    });

}

// =========================================
// Render Store Price Comparison
// =========================================

function renderStorePriceComparison() {

    const itemGroups = {};

    purchaseHistory.forEach(function(entry) {

        if (
            !entry.itemName ||
            !entry.storeName ||
            !entry.amountPerPackage ||
            !entry.unit ||
            entry.priceEach === undefined
        ) {
            return;
        }

        const base =
            getBaseQuantity(
                Number(entry.amountPerPackage),
                entry.unit
            );

        const unitPrice =
            Number(entry.priceEach) /
            base.amount;

        const itemKey =
            entry.itemName
                .trim()
                .toLowerCase();

        if (!itemGroups[itemKey]) {

            itemGroups[itemKey] = {
                itemName: entry.itemName,
                unit: base.unit,
                stores: {}
            };

        }

        itemGroups[itemKey].stores[
            entry.storeName
        ] = unitPrice;

    });


    const comparableItems =
        Object.values(itemGroups)
            .filter(function(item) {

                return (
                    Object.keys(item.stores)
                        .length >= 2
                );

            });


    if (comparableItems.length === 0) {

        storePriceComparisonList.innerHTML = `
            <p class="empty-message">
                Not enough store price data yet.
            </p>
        `;

        return;
    }


    storePriceComparisonList.innerHTML = "";


    comparableItems.forEach(function(item) {

        const storeEntries =
            Object.entries(item.stores)
                .sort(function(a, b) {

                    return a[1] - b[1];

                });


        const cheapestStore =
            storeEntries[0];

        const mostExpensiveStore =
            storeEntries[
                storeEntries.length - 1
            ];


        const savingPercentage =
            mostExpensiveStore[1] > 0
                ? (
                    (
                        mostExpensiveStore[1] -
                        cheapestStore[1]
                    ) /
                    mostExpensiveStore[1]
                ) * 100
                : 0;

                const storePriceRows =
    storeEntries
        .map(function(store, index) {

            const cheapestClass =
                index === 0
                    ? " cheapest-store"
                    : "";

                    const priceDifference =
    store[1] -
    cheapestStore[1];

const differenceText =
    index === 0
        ? "Best price"
        : `R${priceDifference.toFixed(2)} / ${escapeHtml(item.unit)} more`;

            return `

            

                <div class="store-price-row${cheapestClass}">

                    <span class="store-price-name">

                        ${escapeHtml(store[0])}

                        ${
                            index === 0
                                ? `
                                    <span class="cheapest-badge">
                                        Cheapest
                                    </span>
                                `
                                : ""
                        }

                    </span>

                    <div class="store-price-right">

    <strong class="store-price-value">
        R${store[1].toFixed(2)}
        / ${escapeHtml(item.unit)}
    </strong>

    <span class="store-price-difference">
        ${differenceText}
    </span>

</div>

                </div>

            `;

        })
        .join("");


        const div =
            document.createElement("div");


        div.className =
            "store-comparison-item";


        div.innerHTML = `

            <h3>
                ${escapeHtml(item.itemName)}
            </h3>

            <div class="store-price-list">
    ${storePriceRows}
</div>

            <p>
                Cheapest store:
                <strong>
                    ${escapeHtml(
                        cheapestStore[0]
                    )}
                </strong>
                —
                R${cheapestStore[1].toFixed(2)}
                per ${escapeHtml(item.unit)}
            </p>

            <p>
                Most expensive:
                <strong>
                    ${escapeHtml(
                        mostExpensiveStore[0]
                    )}
                </strong>
                —
                R${mostExpensiveStore[1].toFixed(2)}
                per ${escapeHtml(item.unit)}
            </p>

            <p>
                Potential saving:
                <strong>
                    ${savingPercentage.toFixed(1)}%
                </strong>
            </p>

        `;


        storePriceComparisonList
            .appendChild(div);

    });

}

// =========================================
// Render Monthly Spending Chart
// =========================================

function renderMonthlySpendingChart() {

    const now =
        new Date();


    const months = [];


    // Build the last 6 months
    for (let i = 5; i >= 0; i--) {

        const date =
            new Date(
                now.getFullYear(),
                now.getMonth() - i,
                1
            );


        months.push({

            year: date.getFullYear(),

            month: date.getMonth(),

            total: 0

        });

    }


    // Add purchase totals into the correct month
    purchaseHistory.forEach(function(entry) {

        const purchaseDate =
            new Date(entry.date);


        const purchaseYear =
            purchaseDate.getFullYear();


        const purchaseMonth =
            purchaseDate.getMonth();


        const matchingMonth =
            months.find(function(monthEntry) {

                return (
                    monthEntry.year === purchaseYear &&
                    monthEntry.month === purchaseMonth
                );

            });


        if (matchingMonth) {

            matchingMonth.total +=
                Number(entry.totalCost) || 0;

        }

    });


    // Find highest month total
    const highestTotal =
        Math.max(
            ...months.map(function(entry) {
                return entry.total;
            }),
            0
        );


    monthlySpendingChart.innerHTML = "";


    months.forEach(function(entry) {

        let barHeight = 4;


        if (
            highestTotal > 0 &&
            entry.total > 0
        ) {

            barHeight =
                Math.max(
                    (entry.total / highestTotal) * 200,
                    4
                );

        }


        const date =
            new Date(
                entry.year,
                entry.month,
                1
            );


        const monthLabel =
            date.toLocaleDateString(
                "en-ZA",
                {
                    month: "short"
                }
            );


        const yearLabel =
            entry.year;


        const div =
            document.createElement("div");


        div.className =
            "monthly-chart-column";


        div.innerHTML = `

            <div class="monthly-chart-value">
                R${entry.total.toFixed(2)}
            </div>


            <div class="monthly-chart-bar-wrapper">

                <div
                    class="monthly-chart-bar"
                    style="height: ${barHeight}px"
                ></div>

            </div>


            <div class="monthly-chart-label">

                ${monthLabel}

                <br>

                ${yearLabel}

            </div>

        `;


        monthlySpendingChart.appendChild(div);

    });

}

// =========================================
// Shopping List Listeners
// =========================================

function attachShoppingListeners() {

    const quantityInputs =
        document.querySelectorAll(
            ".shopping-quantity"
        );

    const priceInputs =
        document.querySelectorAll(
            ".shopping-price"
        );


    quantityInputs.forEach(function(input) {

        input.addEventListener(
            "input",
            updateShoppingTotal
        );

    });


    priceInputs.forEach(function(input) {

        input.addEventListener(
            "input",
            updateShoppingTotal
        );

    });

}


// =========================================
// Update Shopping Total
// =========================================

function updateShoppingTotal() {

    const quantityInputs =
        document.querySelectorAll(
            ".shopping-quantity"
        );


    let total = 0;


    quantityInputs.forEach(function(quantityInput) {

        const id =
            quantityInput.dataset.id;


        const priceInput =
            document.querySelector(
                `.shopping-price[data-id="${id}"]`
            );


        const lineTotalElement =
            document.querySelector(
                `.shopping-line-total[data-id="${id}"]`
            );


        const quantity =
            Number(quantityInput.value) || 0;


        const price =
            Number(priceInput.value) || 0;


        const lineTotal =
            quantity * price;


        total += lineTotal;


        lineTotalElement.textContent =
            `R${lineTotal.toFixed(2)}`;

    });


    shoppingEstimatedTotal.textContent =
        `R${total.toFixed(2)}`;

}


// =========================================
// Update Dashboard
// =========================================

function updateDashboard() {

    totalProducts.textContent =
        groceries.length;


    const lowStockItems =
        groceries.filter(function(item) {

            return (
                item.stockQuantity > 0 &&
                item.stockQuantity <= item.minimumStock
            );

        });


    const outOfStockItems =
        groceries.filter(function(item) {

            return item.stockQuantity <= 0;

        });


    const itemsToOrder =
        groceries.filter(function(item) {

            return item.stockQuantity <= item.minimumStock;

        });


    const reorderCost =
        itemsToOrder.reduce(
            function(total, item) {

                return total +
                    (
                        item.reorderQuantity *
                        item.unitPrice
                    );

            },
            0
        );


    lowStockCount.textContent =
        lowStockItems.length;


    outOfStockCount.textContent =
        outOfStockItems.length;


    orderCount.textContent =
        itemsToOrder.length;


    estimatedOrderCost.textContent =
        `R${reorderCost.toFixed(2)}`;

}


// =========================================
// Search
// =========================================

searchInput.addEventListener(
    "input",
    renderInventory
);


// =========================================
// Category Filter
// =========================================

filterCategory.addEventListener(
    "change",
    renderInventory
);


// =========================================
// Number Formatting
// =========================================

function formatNumber(number) {

    if (Number.isInteger(number)) {

        return number;

    }

    return Number(number.toFixed(2));

}

// =========================================
// Convert Receipt Quantity To Inventory Unit
// =========================================

function convertReceiptQuantity(
    quantity,
    receiptUnit,
    inventoryUnit
) {

    const normalizedReceiptUnit =
        receiptUnit === "litres"
            ? "L"
            : receiptUnit;


    if (normalizedReceiptUnit === inventoryUnit) {
        return quantity;
    }


    if (
        normalizedReceiptUnit === "kg" &&
        inventoryUnit === "g"
    ) {
        return quantity * 1000;
    }


    if (
        normalizedReceiptUnit === "g" &&
        inventoryUnit === "kg"
    ) {
        return quantity / 1000;
    }


    if (
        normalizedReceiptUnit === "L" &&
        inventoryUnit === "ml"
    ) {
        return quantity * 1000;
    }


    if (
        normalizedReceiptUnit === "ml" &&
        inventoryUnit === "L"
    ) {
        return quantity / 1000;
    }


    return null;
}

// =========================================
// Convert Receipt Price To Inventory Unit
// =========================================

function getReceiptPricePerInventoryUnit(
    pricePerPackage,
    amountPerPackage,
    receiptUnit,
    inventoryUnit
) {

    const normalizedReceiptUnit =
        receiptUnit === "litres"
            ? "L"
            : receiptUnit;


    const receiptPricePerUnit =
        pricePerPackage /
        amountPerPackage;


    if (normalizedReceiptUnit === inventoryUnit) {
        return receiptPricePerUnit;
    }


    if (
        normalizedReceiptUnit === "kg" &&
        inventoryUnit === "g"
    ) {
        return receiptPricePerUnit / 1000;
    }


    if (
        normalizedReceiptUnit === "g" &&
        inventoryUnit === "kg"
    ) {
        return receiptPricePerUnit * 1000;
    }


    if (
        normalizedReceiptUnit === "L" &&
        inventoryUnit === "ml"
    ) {
        return receiptPricePerUnit / 1000;
    }


    if (
        normalizedReceiptUnit === "ml" &&
        inventoryUnit === "L"
    ) {
        return receiptPricePerUnit * 1000;
    }


    return null;
}

// =========================================
// Normalize Package Quantity
// =========================================

function getBaseQuantity(
    amount,
    unit
) {

    if (unit === "kg") {

        return {
            amount: amount * 1000,
            unit: "g"
        };

    }

    if (unit === "g") {

        return {
            amount: amount,
            unit: "g"
        };

    }

    if (unit === "litres") {

        return {
            amount: amount * 1000,
            unit: "ml"
        };

    }

    if (unit === "ml") {

        return {
            amount: amount,
            unit: "ml"
        };

    }

    return {
        amount: amount,
        unit: unit
    };
}

// =========================================
// Find Previous Purchase
// =========================================

function getPreviousPurchase(
    itemName,
    amountPerPackage,
    unit
) {

    const currentBase =
        getBaseQuantity(
            amountPerPackage,
            unit
        );

    const matchingPurchases =
        purchaseHistory
            .filter(function(entry) {

                if (
                    !entry.itemName ||
                    !entry.amountPerPackage ||
                    !entry.unit
                ) {
                    return false;
                }

                if (
                    entry.itemName
                        .trim()
                        .toLowerCase() !==
                    itemName
                        .trim()
                        .toLowerCase()
                ) {
                    return false;
                }

                const previousBase =
                    getBaseQuantity(
                        Number(entry.amountPerPackage),
                        entry.unit
                    );

                return (
                    previousBase.unit ===
                    currentBase.unit
                );

            })
            .sort(function(a, b) {

                return (
                    new Date(b.date) -
                    new Date(a.date)
                );

            });


    if (matchingPurchases.length === 0) {
        return null;
    }


    return matchingPurchases[0];
}

// =========================================
// Compare Purchase Price
// =========================================

function comparePurchasePrice(
    itemName,
    amountPerPackage,
    unit,
    pricePerPackage
) {

    const previousPurchase =
        getPreviousPurchase(
            itemName,
            amountPerPackage,
            unit
        );

    if (!previousPurchase) {

        return {
            found: false
        };
    }


    const currentBase =
        getBaseQuantity(
            amountPerPackage,
            unit
        );


    const previousBase =
        getBaseQuantity(
            Number(
                previousPurchase.amountPerPackage
            ),
            previousPurchase.unit
        );


    const currentUnitPrice =
        Number(pricePerPackage) /
        currentBase.amount;


    const previousUnitPrice =
        Number(previousPurchase.priceEach) /
        previousBase.amount;


    const difference =
        currentUnitPrice -
        previousUnitPrice;


    const percentageDifference =
        previousUnitPrice > 0
            ? (
                difference /
                previousUnitPrice
            ) * 100
            : 0;


    return {

        found: true,

        previousPurchase:
            previousPurchase,

        currentUnitPrice:
            currentUnitPrice,

        previousUnitPrice:
            previousUnitPrice,

        difference:
            difference,

        percentageDifference:
            percentageDifference

    };
}

// =========================================
// Compare Purchase History Entry
// =========================================

function getHistoryPriceComparison(entry) {

    if (
        !entry.itemName ||
        !entry.unit ||
        entry.priceEach === undefined
    ) {
        return null;
    }

    const currentAmountPerPackage =
        entry.amountPerPackage
            ? Number(entry.amountPerPackage)
            : 1;

    const currentBase =
    getBaseQuantity(
        currentAmountPerPackage,
        entry.unit
    );

    const currentDate =
        new Date(entry.date);

    const previousPurchases =
        purchaseHistory
            .filter(function(previousEntry) {

                if (
    previousEntry.id === entry.id ||
    !previousEntry.itemName ||
    !previousEntry.unit
) {
    return false;
}

                if (
                    previousEntry.itemName
                        .trim()
                        .toLowerCase() !==
                    entry.itemName
                        .trim()
                        .toLowerCase()
                ) {
                    return false;
                }

                if (
                    new Date(previousEntry.date) >=
                    currentDate
                ) {
                    return false;
                }

                const previousAmountPerPackage =
    previousEntry.amountPerPackage
        ? Number(previousEntry.amountPerPackage)
        : 1;

const previousBase =
    getBaseQuantity(
        previousAmountPerPackage,
        previousEntry.unit
    );

                return (
                    previousBase.unit ===
                    currentBase.unit
                );

            })
            .sort(function(a, b) {

                return (
                    new Date(b.date) -
                    new Date(a.date)
                );

            });


    if (previousPurchases.length === 0) {
        return null;
    }


    const previousPurchase =
        previousPurchases[0];

    const previousPurchaseAmount =
    previousPurchase.amountPerPackage
        ? Number(previousPurchase.amountPerPackage)
        : 1;

const previousBase =
    getBaseQuantity(
        previousPurchaseAmount,
        previousPurchase.unit
    );


    const currentUnitPrice =
        Number(entry.priceEach) /
        currentBase.amount;


    const previousUnitPrice =
        Number(previousPurchase.priceEach) /
        previousBase.amount;


    const difference =
        currentUnitPrice -
        previousUnitPrice;


    const percentage =
        previousUnitPrice > 0
            ? (
                difference /
                previousUnitPrice
            ) * 100
            : 0;


    return {
        difference:
            difference,

        percentage:
            percentage,

        previousPurchase:
            previousPurchase
    };
}

// =========================================
// Clear Usage History
// =========================================

clearUsageHistoryButton.addEventListener(
    "click",
    function() {

        if (usageHistory.length === 0) {
            return;
        }


        const confirmed =
            confirm(
                "Are you sure you want to clear all usage history?"
            );


        if (!confirmed) {
            return;
        }


        usageHistory = [];

        saveUsageHistory();

        renderUsageHistory();

    }
);


// =========================================
// Escape HTML
// =========================================

function escapeHtml(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}

// =========================================
// Add Purchased Items To Stock
// =========================================

addPurchasedStockButton.addEventListener(
    "click",
    function() {

        const storeName =
    shoppingStore.value.trim();

if (!storeName) {

    alert(
        "Please enter the store name before adding purchased items."
    );

    shoppingStore.focus();

    return;
}

        const checkedItems =
            document.querySelectorAll(
                ".shopping-checkbox:checked"
            );


        if (checkedItems.length === 0) {

            alert(
                "Please tick at least one purchased item."
            );

            return;
        }


        checkedItems.forEach(function(checkbox) {

            const id =
                Number(checkbox.dataset.id);


            const item =
                groceries.find(function(grocery) {

                    return grocery.id === id;

                });


            if (!item) {
                return;
            }


            const quantityInput =
                document.querySelector(
                    `.shopping-quantity[data-id="${id}"]`
                );


            const priceInput =
                document.querySelector(
                    `.shopping-price[data-id="${id}"]`
                );


            const purchasedQuantity =
                Number(quantityInput.value) || 0;


            const purchasedPrice =
                Number(priceInput.value) || 0;


            if (purchasedQuantity <= 0) {
                return;
            }


            // Add purchased quantity to stock
            item.stockQuantity +=
                purchasedQuantity;


            // Update latest price
            item.unitPrice =
                purchasedPrice;


            // Update last purchased date
            item.lastPurchased =
                new Date()
                    .toISOString()
                    .split("T")[0];

                    purchaseHistory.unshift({
    id: Date.now() + Math.random(),
    groceryId: item.id,
    itemName: item.itemName,
    storeName: storeName,
    category: item.category,
    quantity: purchasedQuantity,
    unit: item.unit,
    priceEach: purchasedPrice,
    totalCost: purchasedQuantity * purchasedPrice,
    date: new Date().toISOString()
});

        });


        saveGroceries();

savePurchaseHistory();

shoppingStore.value = "";

renderApp();


        alert(
            "Purchased items have been added to your stock."
        );

    }
);

// =========================================
// Clear Purchase History
// =========================================

clearPurchaseHistoryButton.addEventListener(
    "click",
    function() {

        if (purchaseHistory.length === 0) {
            return;
        }


        const confirmed =
            confirm(
                "Are you sure you want to clear all purchase history?"
            );


        if (!confirmed) {
            return;
        }


        purchaseHistory = [];

        savePurchaseHistory();

renderApp();

    }
);

// =========================================
// Receipt Input Listeners
// =========================================

receiptItems.addEventListener(
    "input",
    function(event) {

        if (
    event.target.classList.contains(
        "receipt-item-name"
    ) ||
    event.target.classList.contains(
        "receipt-item-packages"
    ) ||
    event.target.classList.contains(
        "receipt-item-amount"
    ) ||
    event.target.classList.contains(
        "receipt-item-unit"
    ) ||
    event.target.classList.contains(
        "receipt-item-price"
    )
) {
    updateReceiptTotals();
}
    }
);


receiptItems.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "receipt-remove-button"
            )
        ) {

            const row =
                event.target.closest(
                    ".receipt-item-row"
                );

            if (row) {
                row.remove();
                updateReceiptTotals();
            }
        }
    }
);

// =========================================
// Save Entire Receipt
// =========================================

receiptForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const purchaseDate =
            receiptDate.value;

        const storeName =
            receiptStore.value.trim();

        const rows =
            receiptItems.querySelectorAll(
                ".receipt-item-row"
            );

        if (
            !purchaseDate ||
            !storeName ||
            rows.length === 0
        ) {

            alert(
                "Please enter a purchase date, store name, and at least one item."
            );

            return;
        }

        const receiptId =
            Date.now() + Math.random();

        const purchaseDateTime =
            new Date(
                purchaseDate + "T12:00:00"
            );

        let valid = true;

        const entries = [];

        rows.forEach(function(row) {

            const itemName =
                row.querySelector(
                    ".receipt-item-name"
                ).value.trim();

            const category =
                row.querySelector(
                    ".receipt-item-category"
                ).value;

            const packagesBought =
                Number(
                    row.querySelector(
                        ".receipt-item-packages"
                    ).value
                );

            const packageType =
                row.querySelector(
                    ".receipt-item-package-type"
                ).value;

            const amountPerPackage =
                Number(
                    row.querySelector(
                        ".receipt-item-amount"
                    ).value
                );

            const unit =
                row.querySelector(
                    ".receipt-item-unit"
                ).value;

            const pricePerPackage =
                Number(
                    row.querySelector(
                        ".receipt-item-price"
                    ).value
                );

            if (
                !itemName ||
                !category ||
                Number.isNaN(packagesBought) ||
                packagesBought <= 0 ||
                !packageType ||
                Number.isNaN(amountPerPackage) ||
                amountPerPackage <= 0 ||
                !unit ||
                Number.isNaN(pricePerPackage) ||
                pricePerPackage < 0
            ) {

                valid = false;

                return;
            }

            const totalQuantity =
                packagesBought *
                amountPerPackage;

            const totalCost =
                packagesBought *
                pricePerPackage;

            entries.push({

                id:
                    Date.now() +
                    Math.random(),

                receiptId:
                    receiptId,

                storeName:
                    storeName,

                groceryId:
                    null,

                itemName:
                    itemName,

                category:
                    category,

                packagesBought:
                    packagesBought,

                packageType:
                    packageType,

                amountPerPackage:
                    amountPerPackage,

                quantity:
                    totalQuantity,

                unit:
                    unit,

                priceEach:
                    pricePerPackage,

                totalCost:
                    totalCost,

                date:
                    purchaseDateTime.toISOString()

            });

        });

        if (!valid) {

            alert(
                "Please complete every receipt item correctly."
            );

            return;
        }

                entries.forEach(function(entry) {

            const inventoryUnit =
                entry.unit === "litres"
                    ? "L"
                    : entry.unit;

            const existingItem =
                groceries.find(function(item) {

                    return (
                        item.itemName
                            .trim()
                            .toLowerCase() ===
                        entry.itemName
                            .trim()
                            .toLowerCase()
                    );

                });


            const pricePerUnit =
                entry.amountPerPackage > 0
                    ? entry.priceEach /
                      entry.amountPerPackage
                    : entry.priceEach;


            if (existingItem) {

    const convertedQuantity =
        convertReceiptQuantity(
            entry.quantity,
            entry.unit,
            existingItem.unit
        );


    if (convertedQuantity === null) {

        alert(
            `${entry.itemName} is stored as ${existingItem.unit}, ` +
            `but this receipt uses ${entry.unit}. ` +
            `These units cannot be converted automatically.`
        );

        valid = false;

        return;
    }


    existingItem.stockQuantity +=
        convertedQuantity;

        const convertedPrice =
    getReceiptPricePerInventoryUnit(
        entry.priceEach,
        entry.amountPerPackage,
        entry.unit,
        existingItem.unit
    );


if (convertedPrice === null) {

    alert(
        `${entry.itemName} price could not be converted from ` +
        `${entry.unit} to ${existingItem.unit}.`
    );

    valid = false;

    return;
}


existingItem.unitPrice =
    convertedPrice;


    existingItem.lastPurchased =
        purchaseDate;


    entry.groceryId =
        existingItem.id;

}
            else {

                const newInventoryItem = {

                    id:
                        Date.now() +
                        Math.random(),

                    itemName:
                        entry.itemName,

                    category:
                        entry.category,

                    stockQuantity:
                        entry.quantity,

                    unit:
                        inventoryUnit,

                    minimumStock:
                        0,

                    reorderQuantity:
                        0,

                    unitPrice:
                        pricePerUnit,

                    lastPurchased:
                        purchaseDate,

                    notes:
                        "",

                    totalUsed:
                        0,

                    inventorySource:
                        "purchase"
                };


                groceries.push(
                    newInventoryItem
                );

                entry.groceryId =
                    newInventoryItem.id;

            }

        });


        saveGroceries();

        purchaseHistory.unshift(
            ...entries
        );

        savePurchaseHistory();

        renderApp();

        receiptForm.reset();

        receiptItems.innerHTML = "";

        addReceiptItemRow();

        receiptTotal.textContent =
            "R0.00";

        alert(
            "Receipt saved successfully."
        );

    }
);
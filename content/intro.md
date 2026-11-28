<div class="lesson-summary"><span class="reading-time">CHAPTER 01 · TOPIC 02 · BEGINNER FRIENDLY</span><strong>What you will learn</strong><p>What Power BI is, the difference between Business Intelligence and Power BI, and how analysts turn source data into reports.</p></div>

<div class="scenario-chips"><span>📊 Interactive reporting</span><span>🛍 Retail example</span><span>⚙️ Power Query</span><span>☁️ Power BI Service</span></div>

## 1. What is Power BI?

**Power BI** is a business analytics platform developed by Microsoft. It helps organizations connect to different data sources, prepare and analyse information, and create interactive reports.

<div class="note"><strong>Simple definition to remember</strong><div>Power BI is a tool that helps us understand business data through reports and visualizations.</div></div>

## 2. Business Intelligence vs Power BI

These two terms are related, but they are not the same.

<div class="notes-table-wrap"><table class="notes-table"><thead><tr><th>Business Intelligence (BI)</th><th>Microsoft Power BI</th></tr></thead><tbody><tr><td>A process of using data to understand business performance and support decisions.</td><td>A platform used to analyse data and communicate business insights.</td></tr><tr><td>Applies across different methods and technologies.</td><td>One of the tools that can help implement a BI solution.</td></tr></tbody></table></div>

<div class="note"><strong>Remember</strong><div>BI is the <strong>concept</strong>. Power BI is one of the <strong>tools</strong> used to implement it.</div></div>

## 3. Retail business example: 50 stores

Imagine a retail company with **50 stores**. Each store records sales in Excel or a database. Management wants to know which stores perform well, which products generate the most revenue, and how sales change over time.

Using Power BI, a Data Analyst can:

1. **Connect** to the store sales data.
2. **Prepare** and clean inconsistent records.
3. **Model** the tables and add useful calculations.
4. **Visualize** results in an interactive sales report.
5. **Publish** the report for authorized business users.

<div aria-label="Power BI workflow" class="bi-process"><span>Connect</span><b>→</b><span>Prepare</span><b>→</b><span>Model</span><b>→</b><span>Report</span><b>→</b><span>Publish</span></div>

<div class="insight-panel"><strong>Why this helps management</strong><p>Managers can compare sales by store, product, region and reporting period instead of manually reading hundreds of Excel rows.</p></div>

## 4. What business value does Power BI provide?

Instead of rebuilding the same Excel summary every month, an analyst can create a reusable report that refreshes as data is updated, depending on the connection and refresh setup.

- Explore performance by **store, product, region and month**.
- Spot trends and unusual changes sooner.
- Enable authorized users to explore report filters.
- Reuse a validated model and calculations for consistent reporting.

<div class="note"><strong>Key takeaway</strong><div>Power BI helps turn business data into interactive reports that support analysis and informed decision-making.</div></div>

## 5. Main Power BI building blocks

These components will be explained in detail later. For now, focus on what each one does.

<div class="notes-table-wrap"><table class="notes-table"><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Power BI Desktop</strong></td><td>Create reports and design a data model.</td></tr><tr><td><strong>Power Query</strong></td><td>Clean and transform source data.</td></tr><tr><td><strong>Semantic model</strong></td><td>Organize tables, relationships and calculations for reporting.</td></tr><tr><td><strong>DAX</strong></td><td>Create measures and other calculations, such as Total Sales.</td></tr><tr><td><strong>Power BI Service</strong></td><td>Publish, manage and access content online, subject to permissions and licensing.</td></tr></tbody></table></div>

## 6. A second retail example: Actual vs Target

This fictional example uses amounts in **₹ lakh**. Variance = Actual Sales − Sales Target.

<div class="notes-table-wrap"><table class="notes-table number-table"><thead><tr><th>Store</th><th>Actual</th><th>Target</th><th>Variance</th></tr></thead><tbody><tr><td>Malleshwaram</td><td>2.5</td><td>3.0</td><td class="negative">−0.5</td></tr><tr><td>Rajajinagar</td><td>4.2</td><td>4.0</td><td class="positive">+0.2</td></tr><tr><td>Jayanagar</td><td>3.8</td><td>3.5</td><td class="positive">+0.3</td></tr><tr class="total-row"><td>Total</td><td>10.5</td><td>10.5</td><td>0.0</td></tr></tbody></table></div>

<div class="insight-panel"><strong>Business insight</strong><p>Overall sales met the company's target, but Malleshwaram was ₹0.5 lakh below its target. A report should help the manager investigate the individual store, not assume all stores performed equally.</p></div>

## 7. Desktop, Service, reports and dashboards

**Power BI Desktop:** typically used to prepare the model and build the report. **Power BI Service:** used to publish, manage and share content with authorized users.

<div class="note"><strong>Important terminology</strong><div>A <strong>report</strong> can have multiple pages and interactive visuals. A Power BI <strong>dashboard</strong> is a single-page canvas in the Power BI Service that can contain pinned tiles. They are not identical.</div></div>

<div class="exercise"><strong>Try the Visual Lab next</strong><p>You'll clean messy Excel store names, watch the data flow through Power Query and explore a report that responds to filters. Then practise choosing an appropriate workflow and visuals.</p></div>

<p class="bi-fineprint">All examples are fictional. Topics on modeling, DAX, sharing and refresh will be covered in their dedicated lessons.</p>

// Course catalogue. Loaded before the application.
const modules = [
    {name:'Introduction to Power BI',desc:'What Power BI does, Desktop vs Service, and the reporting workflow.',topics:['What is Power BI?','Power BI Desktop','Power BI Service'],ready:true},
    {name:'Getting & Transforming Data',desc:'Data connections, Power Query, cleaning, and transformation steps.',topics:['Connect to Excel / SQL','Data types','Merge and append','Common transformations']},
    {name:'Data Modelling',desc:'Star schema, relationships, filter direction, and model design.',topics:['Fact and dimension tables','Relationships','Star schema']},
    {name:'DAX Fundamentals',desc:'Measures, calculated columns, row context, and filter context.',topics:['SUM and COUNT','CALCULATE','Row vs filter context']},
    {name:'Data Visualisation',desc:'Choose the right charts, use slicers, and build readable reports.',topics:['Charts and KPIs','Slicers and filters','Formatting']},
    {name:'Advanced DAX',desc:'Time intelligence, iterators, and reusable measure patterns.',topics:['SUMX','YTD and MTD','RANKX']},
    {name:'Report Interactivity',desc:'Drillthrough, bookmarks, buttons, and tooltips.',topics:['Drillthrough','Bookmarks','Tooltips']},
    {name:'Power BI Service',desc:'Publishing, sharing, workspaces, gateways, and refresh.',topics:['Workspaces','Scheduled refresh','Gateway']},
    {name:'Security & Performance',desc:'RLS, performance optimisation, and deployment basics.',topics:['Row-level security','Performance Analyzer','Deployment']}
  ];

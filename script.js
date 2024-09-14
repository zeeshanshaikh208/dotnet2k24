// JavaScript to display content based on the topic selected
const content = {
    'sql-drop-truncate': `
      <h3>DROP vs TRUNCATE</h3>
      <p>DROP removes a table from the database, including its structure and data. TRUNCATE removes all rows from a table but retains the table structure.</p>
    `,
    'sql-magic-tables': `
      <h3>Magic Tables in SQL Server</h3>
      <p>Magic Tables are special tables in SQL Server that are used internally for triggers. They are used to capture changes made during insert, update, and delete operations.</p>
    `,
    'sql-commit-rollback': `
      <h3>Commit and Rollback</h3>
      <p>COMMIT saves all changes made during the transaction, while ROLLBACK undoes all changes made during the transaction.</p>
    `,
    'dotnet-early-late-binding': `
      <h3>Early Binding vs Late Binding</h3>
        
        <p>In .NET, early binding and late binding refer to how objects and methods are referenced and called during execution. Here's a breakdown of both concepts:</p>
        
        <h2>1. Early Binding (Compile-Time Binding)</h2>
        <p><strong>Definition:</strong> Early binding occurs when the object type and method to be called are determined at compile time. This means that the compiler knows the exact type of object, the methods, and properties to invoke, which allows for better performance.</p>
        
        <h3>How It Works:</h3>
        <ul>
            <li>When you create an instance of a class and call its methods directly, you're using early binding.</li>
            <li>Since everything is known at compile time, it allows the compiler to optimize the code and do type checking, making it safer and more efficient.</li>
        </ul>
        
        <h3>Example:</h3>
        <pre><code>// Early binding example:
Employee emp = new Employee();  // Employee type is known at compile-time
emp.CalculateSalary();          // Method call is determined at compile-time
        </code></pre>
        
        <h3>Advantages:</h3>
        <ul>
            <li><strong>Better performance:</strong> Since everything is resolved at compile time, there is no overhead of resolving types at runtime.</li>
            <li><strong>Type safety:</strong> Errors are caught at compile time, making the code more reliable and less prone to runtime errors.</li>
        </ul>
        
        <h2>2. Late Binding (Run-Time Binding)</h2>
        <p><strong>Definition:</strong> Late binding occurs when the object type and method to be called are determined at runtime, not at compile time. In late binding, the actual type of the object is determined during the program's execution.</p>
        
        <h3>How It Works:</h3>
        <ul>
            <li>Late binding is commonly used in situations where you do not know the type of object at compile time.</li>
            <li>In C#, this can be achieved through reflection or by using the <code>dynamic</code> keyword, where method resolution happens at runtime.</li>
        </ul>
        
        <h3>Example (using reflection):</h3>
        <pre><code>// Late binding example using reflection:
object obj = Activator.CreateInstance(Type.GetType("Employee"));
MethodInfo method = obj.GetType().GetMethod("CalculateSalary");
method.Invoke(obj, null);  // Method call is determined at runtime
        </code></pre>
        
        <h3>Example (using dynamic):</h3>
        <pre><code>// Late binding example using dynamic:
dynamic emp = new Employee();   // Type is determined at runtime
emp.CalculateSalary();          // Method call is determined at runtime
        </code></pre>
        
        <h3>Advantages:</h3>
        <ul>
            <li><strong>Flexibility:</strong> Late binding allows for more dynamic and flexible code since types and methods can be resolved dynamically.</li>
            <li><strong>Useful in certain scenarios:</strong> For example, when working with COM components or when the type is not known until runtime.</li>
        </ul>
        
        <h3>Disadvantages:</h3>
        <ul>
            <li><strong>Performance overhead:</strong> Since method resolution occurs at runtime, late binding is slower than early binding.</li>
            <li><strong>Less type safety:</strong> Errors may occur at runtime since the compiler cannot check for method existence or parameter types in advance.</li>
        </ul>
        
        <h2>Key Differences:</h2>
        <table>
            <thead>
                <tr>
                    <th>Aspect</th>
                    <th>Early Binding</th>
                    <th>Late Binding</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Determination of Types</td>
                    <td>Compile-time</td>
                    <td>Runtime</td>
                </tr>
                <tr>
                    <td>Performance</td>
                    <td>Faster (due to compile-time resolution)</td>
                    <td>Slower (due to runtime resolution)</td>
                </tr>
                <tr>
                    <td>Type Safety</td>
                    <td>Strong (compiler checks types)</td>
                    <td>Weaker (errors may appear at runtime)</td>
                </tr>
                <tr>
                    <td>Flexibility</td>
                    <td>Less flexible</td>
                    <td>More flexible (types can be resolved dynamically)</td>
                </tr>
                <tr>
                    <td>Usage</td>
                    <td>When types are known in advance</td>
                    <td>When types or methods are not known until runtime</td>
                </tr>
            </tbody>
        </table>

    `,
    'dotnet-finalize-dispose': `
      <h3>Finalize() and Dispose()</h3>
      <p>Finalize() is used for cleanup before an object is reclaimed by garbage collection, while Dispose() is used to release unmanaged resources manually.</p>
    `,
    'dotnet-var-dynamic': `
      <h3>var vs dynamic</h3>
      <p>var is used for implicit typing at compile-time, while dynamic bypasses compile-time type checking and resolves the type at runtime.</p>
    `,
    'dotnet-solid-principles': `
      <h3>SOLID Principles</h3>
      <p>SOLID is an acronym for five design principles that make software designs more understandable, flexible, and maintainable.</p>
    `,
    'dotnet-minification-bundling': `
      <h3>Minification and Bundling</h3>
      <p>Minification reduces file size by removing unnecessary characters, while bundling combines multiple files into a single file to reduce HTTP requests.</p>
    `,
    'dotnet-run-use-map': `
      <h3>Run(), Use(), Map() Methods</h3>
      <p>Run(), Use(), and Map() are methods in ASP.NET Core used for configuring middleware in the request pipeline.</p>
    `,
    'dotnet-middleware-filters': `
      <h3>Middleware vs Filters in .NET Core</h3>
      <p>Middleware components are used to handle requests and responses in the HTTP pipeline, while filters are used to run code during different stages of request processing in MVC.</p>
    `,
    'dotnet-dependency-injection': `
      <h3>Dependency Injection</h3>
      <p>Dependency Injection is a design pattern used to implement Inversion of Control, allowing objects to be injected into other objects rather than creating them directly.</p>
    `,
    'general-ajax': `
      <h3>AJAX</h3>
      <p>AJAX (Asynchronous JavaScript and XML) is used to send and receive data asynchronously without refreshing the page.</p>
    `,
    'general-viewstate-session': `
      <h3>ViewState vs Session</h3>
      <p>ViewState is used to preserve page and control values between postbacks, while Session state is used to preserve data across multiple requests for a specific user.</p>
    `,
    'general-cookies': `
      <h3>Types of Cookies</h3>
      <p>Cookies can be classified into session cookies, persistent cookies, and secure cookies based on their lifespan and security attributes.</p>
    `,
    'general-ado-net': `
      <h3>ADO.NET</h3>
      <p>ADO.NET is a set of classes in the .NET Framework that provides data access services to .NET applications.</p>
    `,
    'general-mvc-routing': `
      <h3>MVC Routing</h3>
      <p>Routing in ASP.NET MVC is used to map URLs to controller actions and handle URL routing for web applications.</p>
    `,
    'general-session-management': `
      <h3>Session Management</h3>
      <p>Session management involves tracking user sessions to store and retrieve user-specific data during their visit.</p>
    `,
    'general-action-return-types': `
      <h3>Controller Action Return Types</h3>
      <p>Controller actions in MVC can return various types, including ActionResult, ViewResult, and JSONResult, depending on the response required.</p>
    `,
    'general-actionresult-viewresult': `
      <h3>ActionResult vs ViewResult</h3>
      <p>ActionResult is a base class for various result types, while ViewResult specifically renders a view.</p>
    `
  };
  
  function showContent(topic) {
    const contentDiv = document.getElementById('topic-content');
    contentDiv.innerHTML = content[topic] || '<p>Select a topic to view its description.</p>';
  }
  
// JavaScript to display content based on the topic selected
const content = {
  //SQL
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
    //DOTNET
    //Binding
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



    //Finalize Dispose
    'dotnet-finalize-dispose': `
    <h1>Finalize() vs Dispose() Methods</h1>

<p>In .NET, both <code>Finalize()</code> and <code>Dispose()</code> are used to release resources (especially unmanaged resources like file handles, database connections, etc.), but they serve different purposes and work in different ways. Here's a comparison of both:</p>

<h2>1. Finalize() Method</h2>
<p><strong>Purpose:</strong></p>
<ul>
    <li>The <code>Finalize()</code> method is used to clean up unmanaged resources before an object is reclaimed by garbage collection.</li>
    <li>It's implicitly called by the .NET runtime during the object's garbage collection process, not by user code.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li>The <code>Finalize()</code> method is called by the garbage collector on an object when it determines that the object is no longer reachable.</li>
    <li>It's automatically implemented in objects that override the <code>Object.Finalize()</code> method (or use a destructor in C#).</li>
    <li>It is part of the non-deterministic finalization, meaning you do not know exactly when the garbage collector will call it.</li>
</ul>

<p><strong>Example (using destructor):</strong></p>
<pre><code>class MyClass
{
    // Destructor (finalizer)
    ~MyClass()
    {
        // Clean up unmanaged resources
    }
}
</code></pre>

<p><strong>Limitations:</strong></p>
<ul>
    <li><strong>Not deterministic:</strong> You cannot predict when (or if) the <code>Finalize()</code> method will be called, as it depends on when the garbage collector runs.</li>
    <li><strong>Performance overhead:</strong> Finalization adds overhead because finalized objects take longer to be reclaimed, and the garbage collector has to do additional work.</li>
    <li><strong>Cannot be explicitly called:</strong> It’s automatically invoked by the garbage collector.</li>
</ul>

<p><strong>Best Practices:</strong></p>
<ul>
    <li>Avoid using <code>Finalize()</code> unless you absolutely have to clean up unmanaged resources and cannot rely on <code>Dispose()</code>.</li>
    <li>For better control over resource cleanup, prefer the IDisposable pattern.</li>
</ul>

<h2>2. Dispose() Method (from IDisposable interface)</h2>
<p><strong>Purpose:</strong></p>
<ul>
    <li>The <code>Dispose()</code> method is explicitly called by the user or developer to release unmanaged resources like file handles, database connections, etc., when they are no longer needed.</li>
    <li>It's part of the deterministic disposal pattern, meaning you can control exactly when the resources are released.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li><code>Dispose()</code> is part of the <code>IDisposable</code> interface, which must be implemented by any class that needs to explicitly manage resource cleanup.</li>
    <li>Once <code>Dispose()</code> is called, the object's resources are released immediately, and the object is put in a "disposed" state.</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>class MyClass : IDisposable
{
    private bool disposed = false;

    // Implement IDisposable.
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Suppress finalization since cleanup is done
    }

    // Protected dispose method to clean up resources
    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                // Free managed resources here
            }

            // Free unmanaged resources here
            disposed = true;
        }
    }

    // Destructor (finalizer) to call Dispose in case it's not done explicitly
    ~MyClass()
    {
        Dispose(false);
    }
}
</code></pre>

<p><strong>Advantages:</strong></p>
<ul>
    <li><strong>Deterministic:</strong> You control when to release the resources by calling <code>Dispose()</code>, ensuring timely cleanup.</li>
    <li><strong>Can be called multiple times safely:</strong> With the proper pattern (as shown in the example), <code>Dispose()</code> can be called multiple times without causing issues.</li>
</ul>

<p><strong>Best Practices:</strong></p>
<ul>
    <li>Always use the <code>Dispose()</code> method to release resources when you are done with an object.</li>
    <li>Implement the <code>IDisposable</code> pattern if your class holds unmanaged resources.</li>
    <li>Use the <code>using</code> statement to automatically call <code>Dispose()</code> when the object goes out of scope:</li>
</ul>
<pre><code>using (var myObj = new MyClass())
{
    // Use the object
}
// Dispose() is called automatically at the end of the using block
</code></pre>

<h2>Key Differences:</h2>
<table>
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Finalize()</th>
            <th>Dispose()</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Purpose</td>
            <td>Clean up unmanaged resources at GC time</td>
            <td>Clean up managed and unmanaged resources explicitly</td>
        </tr>
        <tr>
            <td>Called By</td>
            <td>Garbage collector</td>
            <td>User code (manually or via using statement)</td>
        </tr>
        <tr>
            <td>Deterministic?</td>
            <td>No (non-deterministic)</td>
            <td>Yes (deterministic)</td>
        </tr>
        <tr>
            <td>Performance</td>
            <td>Slower due to GC involvement</td>
            <td>Faster, as it’s called directly</td>
        </tr>
        <tr>
            <td>Implementation</td>
            <td>Optional (use destructors)</td>
            <td>Must implement <code>IDisposable</code> interface</td>
        </tr>
        <tr>
            <td>Use Cases</td>
            <td>Only for unmanaged resources if <code>Dispose()</code> isn't called</td>
            <td>For managed and unmanaged resources</td>
        </tr>
    </tbody>
</table>

<h2>When to Use:</h2>
<ul>
    <li>Use <code>Dispose()</code> when you want to deterministically release resources.</li>
    <li>Use <code>Finalize()</code> (destructor) only if you're dealing with unmanaged resources and want a safety net in case <code>Dispose()</code> wasn't called.</li>
</ul>  
    `,


//SEALED
'dotnet-sealed':`
<h1 class="mt-4">The <code>sealed</code> Keyword in C#</h1>
  <p>The <code>sealed</code> keyword in C# is used to restrict the inheritance of a class or method. It can be applied to both classes and methods to control how they can be used in inheritance hierarchies. Here’s a detailed explanation of its usage:</p>

  <h2>1. Sealed Class</h2>
  <p><strong>Definition:</strong> When a class is marked as sealed, it cannot be inherited from. This means that no other class can derive from a sealed class.</p>
  <p><strong>Purpose:</strong> The <code>sealed</code> keyword is used to prevent further inheritance and extendability of a class. It can be useful to:</p>
  <ul>
    <li>Prevent modification of the class behavior through inheritance.</li>
    <li>Ensure that the class remains unchanged and is not extended in a way that could potentially introduce bugs or undesired behavior.</li>
  </ul>
  <p><strong>Usage:</strong></p>
  <pre><code class="language-csharp">public sealed class MySealedClass
{
    public void MyMethod()
    {
        // Method implementation
    }
}

// The following code will result in a compile-time error:
// public class DerivedClass : MySealedClass { }
  </code></pre>
  <p><strong>Example:</strong></p>
  <pre><code class="language-csharp">public sealed class Logger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

// Attempting to derive from Logger will cause a compile-time error:
// public class CustomLogger : Logger { }
  </code></pre>

  <h2>2. Sealed Method</h2>
  <p><strong>Definition:</strong> When a method in a base class is marked as sealed, it cannot be overridden in any derived class. This applies only when the method is virtual in the base class.</p>
  <p><strong>Purpose:</strong> The <code>sealed</code> keyword on a method is used to prevent further overriding of a method in derived classes, which can be useful to:</p>
  <ul>
    <li>Lock down the behavior of the method to ensure it does not change in derived classes.</li>
    <li>Ensure that the method implementation remains consistent across all derived classes.</li>
  </ul>
  <p><strong>Usage:</strong> A method marked as sealed must be in a class that is itself marked as abstract or sealed, and it must override a virtual or abstract method from a base class.</p>
  <pre><code class="language-csharp">public class BaseClass
{
    public virtual void Display()
    {
        Console.WriteLine("BaseClass Display");
    }
}

public class DerivedClass : BaseClass
{
    public sealed override void Display()
    {
        Console.WriteLine("DerivedClass Display");
    }
}

// Attempting to override Display in another class will cause a compile-time error:
// public class FurtherDerivedClass : DerivedClass
// {
//     public override void Display()
//     {
//         Console.WriteLine("FurtherDerivedClass Display");
//     }
// }
  </code></pre>

  <h2>Summary of <code>sealed</code> Keyword</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Usage</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sealed Class</td>
        <td>Prevents the class from being inherited.</td>
        <td><code>public sealed class MyClass { }</code></td>
      </tr>
      <tr>
        <td>Sealed Method</td>
        <td>Prevents a method from being overridden in derived classes.</td>
        <td><code>public sealed override void MyMethod() { }</code></td>
      </tr>
    </tbody>
  </table>

  <h2>When to Use <code>sealed</code></h2>
  <p><strong>Sealed Class:</strong></p>
  <ul>
    <li>When you want to create a class that should not be extended, ensuring its behavior remains consistent and unaltered.</li>
    <li>To improve performance slightly by preventing runtime type checks and optimizations related to inheritance.</li>
  </ul>
  <p><strong>Sealed Method:</strong></p>
  <ul>
    <li>When you need to lock down specific methods that should not be further overridden, ensuring their behavior remains consistent and secure in derived classes.</li>
  </ul>
  <p>The <code>sealed</code> keyword provides a way to enforce design decisions about class and method inheritance, allowing you to better control and maintain the behavior of your classes and methods in C#.</p>

`,

//WEB API RETURN TYPE
'dotnet-webapi-return-types':`
<h1 class="mt-4">Main Return Types Supported in Web API</h1>
<p>In ASP.NET Web API, controllers can return various types of responses. The return types supported in Web API help you shape the response sent to the client. Here are the main return types supported:</p>

<h2>1. <code>IHttpActionResult</code></h2>
<p><strong>Definition:</strong> <code>IHttpActionResult</code> is an interface that represents an action result in Web API. It provides a way to return a result that encapsulates the response, including status codes and content.</p>
<p><strong>Purpose:</strong> It allows for more flexibility and better control over the HTTP response. It enables you to use action results that can be composed and returned from the controller methods.</p>
<p><strong>Usage:</strong></p>
<pre><code class="language-csharp">public class ValuesController : ApiController
{
    public IHttpActionResult Get()
    {
        return Ok(new { Value = "Some data" });
    }
}
  </code></pre>
<p><strong>Common Methods:</strong></p>
<ul>
  <li><code>Ok()</code>: Returns a 200 OK response with a specified content.</li>
  <li><code>NotFound()</code>: Returns a 404 Not Found response.</li>
  <li><code>BadRequest()</code>: Returns a 400 Bad Request response.</li>
  <li><code>InternalServerError()</code>: Returns a 500 Internal Server Error response.</li>
</ul>

<h2>2. <code>HttpResponseMessage</code></h2>
<p><strong>Definition:</strong> <code>HttpResponseMessage</code> represents the HTTP response message including status code, headers, and content.</p>
<p><strong>Purpose:</strong> It provides explicit control over the entire HTTP response, including headers and status codes.</p>
<p><strong>Usage:</strong></p>
<pre><code class="language-csharp">public class ValuesController : ApiController
{
    public HttpResponseMessage Get()
    {
        var response = Request.CreateResponse(HttpStatusCode.OK, new { Value = "Some data" });
        return response;
    }
}
  </code></pre>

<h2>3. POCO (Plain Old CLR Object)</h2>
<p><strong>Definition:</strong> Returning a POCO object directly from a Web API controller method returns the object serialized as JSON or XML based on the requested media type.</p>
<p><strong>Purpose:</strong> It simplifies returning data by letting the Web API framework handle serialization and content negotiation.</p>
<p><strong>Usage:</strong></p>
<pre><code class="language-csharp">public class ValuesController : ApiController
{
    public MyDataModel Get()
    {
        return new MyDataModel { Value = "Some data" };
    }
}

public class MyDataModel
{
    public string Value { get; set; }
}
  </code></pre>

<h2>4. <code>IEnumerable&lt;T&gt;</code> or <code>List&lt;T&gt;</code></h2>
<p><strong>Definition:</strong> Returning an <code>IEnumerable&lt;T&gt;</code> or <code>List&lt;T&gt;</code> from a Web API method returns a collection of objects serialized as JSON or XML.</p>
<p><strong>Purpose:</strong> Useful for returning lists or collections of data items.</p>
<p><strong>Usage:</strong></p>
<pre><code class="language-csharp">public class ValuesController : ApiController
{
    public IEnumerable<MyDataModel> Get()
    {
        return new List<MyDataModel>
        {
            new MyDataModel { Value = "Data 1" },
            new MyDataModel { Value = "Data 2" }
        };
    }
}
  </code></pre>

<h2>5. <code>HttpStatusCode</code></h2>
<p><strong>Definition:</strong> Directly returning an <code>HttpStatusCode</code> from a Web API method sends an HTTP response with the specified status code.</p>
<p><strong>Purpose:</strong> Use this for simple status code responses without additional content.</p>
<p><strong>Usage:</strong></p>
<pre><code class="language-csharp">public class ValuesController : ApiController
{
    public HttpStatusCode Get()
    {
        return HttpStatusCode.NoContent; // 204 No Content
    }
}
  </code></pre>

<h2>Summary of Main Return Types</h2>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Return Type</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>IHttpActionResult</code></td>
      <td>Represents an action result with status and content control.</td>
      <td><code>return Ok(new { Value = "data" });</code></td>
    </tr>
    <tr>
      <td><code>HttpResponseMessage</code></td>
      <td>Represents the entire HTTP response including headers.</td>
      <td><code>return Request.CreateResponse(HttpStatusCode.OK, data);</code></td>
    </tr>
    <tr>
      <td>POCO</td>
      <td>Directly returns an object serialized as JSON or XML.</td>
      <td><code>return new MyDataModel { Value = "data" };</code></td>
    </tr>
    <tr>
      <td><code>IEnumerable&lt;T&gt; / List&lt;T&gt;</code></td>
      <td>Returns a collection of objects serialized as JSON or XML.</td>
      <td><code>return new List<MyDataModel> { ... };</code></td>
    </tr>
    <tr>
      <td><code>HttpStatusCode</code></td>
      <td>Returns an HTTP status code with no content.</td>
      <td><code>return HttpStatusCode.NoContent;</code></td>
    </tr>
  </tbody>
</table>

<p>These return types allow you to build flexible and powerful Web APIs, handling various types of responses and ensuring compatibility with different client expectations and media types.</p>

`,

    //VAR DYNAMIC
    'dotnet-var-dynamic': `
    <h1>Difference between var and dynamic Keywords</h1>

<p>In C#, both <code>var</code> and <code>dynamic</code> are used to declare variables, but they behave very differently in terms of type inference, compile-time checks, and runtime behavior. Here's a detailed comparison of the two:</p>

<h2>1. var Keyword (Implicit Typing)</h2>

<p><strong>Purpose:</strong></p>
<ul>
    <li>The <code>var</code> keyword allows for implicit typing, meaning that the type of the variable is inferred by the compiler at compile-time based on the type of the assigned value.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li>When you declare a variable with <code>var</code>, the compiler determines its type from the assigned value. Once the type is inferred, it cannot change.</li>
    <li>The variable still has a strongly-typed underlying type at compile-time.</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>var number = 10;   // Compiler infers 'int'
var text = "Hello"; // Compiler infers 'string'
</code></pre>

<p><strong>Compile-Time Behavior:</strong></p>
<ul>
    <li>Type is known at compile-time: The compiler knows the exact type of the variable and performs type checking, so errors are caught during compilation.</li>
    <li>Once the type is inferred, it cannot change during runtime.</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
    <li><strong>Strong typing:</strong> <code>var</code> is still strongly-typed, so you get the benefits of compile-time type checking.</li>
    <li><strong>Simplifies syntax:</strong> It reduces verbosity, especially with long types like generics.</li>
</ul>

<p><strong>Limitations:</strong></p>
<ul>
    <li>You must assign a value at the time of declaration since the compiler needs that value to infer the type.</li>
    <li>It’s not really "dynamic"—the type is fixed after inference.</li>
</ul>

<h2>2. dynamic Keyword (Dynamic Typing)</h2>

<p><strong>Purpose:</strong></p>
<ul>
    <li>The <code>dynamic</code> keyword allows for dynamic typing, meaning that the type of the variable is determined at runtime, not at compile-time.</li>
    <li>It's useful when the type of an object is not known until runtime or when interacting with dynamic languages or COM objects.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li>Variables declared as <code>dynamic</code> bypass compile-time type checking. The type is determined at runtime, and method calls or property access on dynamic objects are resolved at runtime.</li>
    <li>If you make a mistake like calling a non-existent method, the error won't be caught during compilation but will throw an exception at runtime.</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>dynamic obj = 10;      // Currently, obj is an int
obj = "Hello";         // Now, obj is a string
obj.SomeNonExistentMethod(); // This will compile, but cause a runtime error
</code></pre>

<p><strong>Runtime Behavior:</strong></p>
<ul>
    <li>Type is resolved at runtime: There’s no compile-time type checking, so you can change the variable’s type during execution.</li>
    <li>The dynamic type can behave differently based on the context at runtime.</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
    <li><strong>Flexibility:</strong> You can change the type of the variable at runtime.</li>
    <li>Useful when working with reflection, COM objects, or dynamic languages like Python or JavaScript.</li>
</ul>

<p><strong>Limitations:</strong></p>
<ul>
    <li><strong>No compile-time checking:</strong> Any type-related errors will only show up at runtime, which can make debugging more difficult.</li>
    <li><strong>Performance overhead:</strong> Because the type resolution happens at runtime, there’s a performance cost.</li>
</ul>

<h2>Key Differences:</h2>
<table>
    <thead>
        <tr>
            <th>Aspect</th>
            <th>var</th>
            <th>dynamic</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Type Inference</td>
            <td>Compile-time (inferred by the compiler)</td>
            <td>Runtime (determined at execution)</td>
        </tr>
        <tr>
            <td>Type Checking</td>
            <td>Strongly typed (checked at compile-time)</td>
            <td>Weakly typed (checked at runtime)</td>
        </tr>
        <tr>
            <td>Error Checking</td>
            <td>Compile-time errors for type mismatch</td>
            <td>Errors occur at runtime</td>
        </tr>
        <tr>
            <td>Changing Type</td>
            <td>Type is fixed once inferred</td>
            <td>Type can change during runtime</td>
        </tr>
        <tr>
            <td>Performance</td>
            <td>Faster (type known at compile time)</td>
            <td>Slower (requires runtime type resolution)</td>
        </tr>
        <tr>
            <td>Use Case</td>
            <td>When type is known or can be inferred at compile time</td>
            <td>When type is unknown or dynamic at runtime</td>
        </tr>
        <tr>
            <td>Compatibility</td>
            <td>Works with strongly-typed objects</td>
            <td>Works with dynamic objects (like COM) and dynamic languages</td>
        </tr>
    </tbody>
</table>

<h2>When to Use:</h2>
<ul>
    <li><strong>Use <code>var</code>:</strong></li>
    <ul>
        <li>When the type is known or can be inferred at compile time.</li>
        <li>For strong type safety, where compile-time checks are important.</li>
    </ul>
    <li><strong>Use <code>dynamic</code>:</strong></li>
    <ul>
        <li>When the type is only known at runtime, or when you need flexibility (e.g., interacting with COM objects, dynamic languages, or reflection).</li>
        <li>When you want to defer method and property resolution until runtime.</li>
    </ul>
</ul>  
    `,



    //SOLID PRINCIPLES
    'dotnet-solid-principles': `
      <h3>SOLID Principles</h3>
      <p>SOLID is an acronym for five design principles that make software designs more understandable, flexible, and maintainable.</p>
    `,

    //MINIFICATION BUNDLING
    'dotnet-minification-bundling': `
    <h2>Minification and Bundling</h2>

<p>Minification and bundling are techniques used in web development to improve the performance and efficiency of web applications by reducing the size of web assets and minimizing the number of HTTP requests.</p>

<h3>Minification</h3>
<p>Minification is the process of removing unnecessary characters from code without changing its functionality. This process is applied to CSS, JavaScript, and HTML files to reduce their size and improve load times.</p>

<p><strong>Purpose:</strong> To reduce the file size of web assets, which in turn reduces the amount of data that needs to be transferred from the server to the client. This results in faster page load times and better performance.</p>

<p><strong>What It Does:</strong></p>
<ul>
    <li>Removes whitespace (spaces, tabs, newlines).</li>
    <li>Removes comments.</li>
    <li>Shortens variable names and function names.</li>
    <li>Performs other code optimizations (e.g., combining statements).</li>
</ul>

<p><strong>Example:</strong></p>
<p>Original JavaScript:</p>
<pre><code class="language-javascript">
function add(a, b) {
    // This function adds two numbers
    return a + b;
}
</code></pre>

<p>Minified JavaScript:</p>
<pre><code class="language-javascript">
function add(a,b){return a+b;}
</code></pre>

<p><strong>Tools:</strong> There are various tools and libraries available for minification, including:</p>
<ul>
    <li>JavaScript: UglifyJS, Terser</li>
    <li>CSS: Clean-CSS, CSSNano</li>
    <li>HTML: HTMLMinifier</li>
</ul>

<h3>Bundling</h3>
<p>Bundling is the process of combining multiple files into a single file. This is typically applied to CSS and JavaScript files to reduce the number of HTTP requests made by the browser when loading a web page.</p>

<p><strong>Purpose:</strong> To reduce the number of HTTP requests made by the browser. Fewer requests lead to faster page load times and reduced server load.</p>

<p><strong>What It Does:</strong></p>
<ul>
    <li>Combines multiple JavaScript or CSS files into a single file.</li>
    <li>Helps improve performance by reducing the number of HTTP requests required to load a page.</li>
</ul>

<p><strong>Example:</strong></p>
<p>Multiple JavaScript Files:</p>
<ul>
    <li>script1.js</li>
    <li>script2.js</li>
    <li>script3.js</li>
</ul>
<p>Bundled JavaScript File:</p>
<p><code>bundle.js</code> (contains the combined contents of <code>script1.js</code>, <code>script2.js</code>, and <code>script3.js</code>)</p>

<p><strong>Tools:</strong> Various tools and frameworks support bundling, including:</p>
<ul>
    <li>ASP.NET: The <code>BundleConfig</code> class in ASP.NET MVC or Core provides built-in support for bundling.</li>
    <li>Webpack: A powerful module bundler for JavaScript applications.</li>
    <li>Gulp: A task runner that can be used for bundling and other build tasks.</li>
    <li>Parcel: A zero-config bundler for JavaScript applications.</li>
</ul>

<h3>In ASP.NET</h3>

<h4>ASP.NET MVC</h4>
<p><strong>Bundling and Minification:</strong></p>
<p><strong>Configuration:</strong> Set up bundling and minification in the <code>BundleConfig.cs</code> file.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-csharp">
public class BundleConfig
{
    public static void RegisterBundles(BundleCollection bundles)
    {
        // CSS bundle
        bundles.Add(new StyleBundle("~/Content/css").Include(
                  "~/Content/bootstrap.css",
                  "~/Content/site.css"));

        // JavaScript bundle
        bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                  "~/Scripts/jquery-{version}.js"));

        // Enable optimizations
        BundleTable.EnableOptimizations = true;
    }
}
</code></pre>

<p><strong>Usage:</strong></p>
<p>In your views, use the <code>Scripts</code> and <code>Styles</code> helper methods to include the bundles.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-html">
@Scripts.Render("~/bundles/jquery")
@Styles.Render("~/Content/css")
</code></pre>

<h4>ASP.NET Core</h4>
<p><strong>Bundling and Minification:</strong></p>
<p><strong>Configuration:</strong> Use the <code>Microsoft.AspNetCore.Mvc.TagHelpers</code> and other third-party tools.</p>
<p><strong>Example (Using LibMan and other tools):</strong></p>
<pre><code class="language-json">
{
  "version": "1.0",
  "libraries": [
    {
      "library": "bootstrap@4.6.0",
      "files": [
        "dist/css/bootstrap.min.css",
        "dist/js/bootstrap.min.js"
      ]
    }
  ]
}
</code></pre>

<p><strong>Usage:</strong></p>
<p>Include bundled and minified files in your <code>Layout.cshtml</code> or other views.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-html">
&lt;link rel=&quot;stylesheet&quot; href=&quot;~/lib/bootstrap/dist/css/bootstrap.min.css&quot; /&gt;
&lt;script src=&quot;~/lib/bootstrap/dist/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
</code></pre>

<h3>Summary</h3>
<ul>
    <li><strong>Minification:</strong> Reduces file size by removing unnecessary characters and optimizing code.</li>
    <li><strong>Bundling:</strong> Combines multiple files into a single file to reduce the number of HTTP requests.</li>
</ul>

<p>Both techniques are crucial for optimizing web performance, especially for larger websites with many assets. They help improve loading times, reduce bandwidth usage, and provide a better user experience.</p>

    `,


    //RUN USE MAP
    'dotnet-run-use-map': `
     
    <h2>Run(), Use() and Map() method</h2>
<p>In ASP.NET Core, <strong>Run()</strong>, <strong>Use()</strong>, and <strong>Map()</strong> methods are part of the middleware pipeline configuration, which allows you to define how requests are processed through a series of components. Here's a detailed look at each method:</p>

<h3>1. Run() Method</h3>
<p><strong>Purpose:</strong> The Run() method is used to add terminal middleware to the request pipeline. Terminal middleware is the last piece of middleware in the pipeline that handles the request and generates the response. It does not call the next middleware in the pipeline, effectively ending the processing of the request.</p>
<p><strong>Usage:</strong> Typically used to handle specific types of requests or to provide a final response without passing control to the next middleware.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-csharp">
app.Run(async context =&gt;
{
    await context.Response.WriteAsync("Hello from Run method!");
});
</code></pre>
<p>In this example, the Run() method writes a response directly to the client. No further middleware will be processed after this.</p>

<h3>2. Use() Method</h3>
<p><strong>Purpose:</strong> The Use() method is used to add middleware to the pipeline. Middleware added using Use() can perform actions before and after the next middleware is invoked. It allows you to inject logic into the pipeline and can call the next middleware in the chain.</p>
<p><strong>Usage:</strong> Suitable for general-purpose middleware that processes requests and responses and may pass control to the next middleware.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-csharp">
app.Use(async (context, next) =&gt;
{
    // Logic before the next middleware
    await context.Response.WriteAsync("Hello from Use method - Before next middleware!\n");

    await next(); // Call the next middleware

    // Logic after the next middleware
    await context.Response.WriteAsync("Hello from Use method - After next middleware!");
});
</code></pre>
<p>Here, the Use() method adds middleware that performs actions both before and after the next middleware is called.</p>

<h3>3. Map() Method</h3>
<p><strong>Purpose:</strong> The Map() method is used to branch the request pipeline based on the request path. It allows you to create a sub-pipeline for requests that match a specific path segment. This is useful for organizing and isolating different parts of your application.</p>
<p><strong>Usage:</strong> Suitable for creating separate pipelines for different parts of your application based on URL paths.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-csharp">
app.Map("/admin", adminApp =&gt;
{
    adminApp.Run(async context =&gt;
    {
        await context.Response.WriteAsync("Hello from Admin path!");
    });
});

app.Map("/user", userApp =&gt;
{
    userApp.Run(async context =&gt;
    {
        await context.Response.WriteAsync("Hello from User path!");
    });
});
</code></pre>
<p>In this example, the Map() method creates two separate pipelines. Requests to <code>/admin</code> will be handled by the first pipeline, and requests to <code>/user</code> will be handled by the second pipeline.</p>

<h3>Summary of Differences</h3>
<ul>
    <li><strong>Run():</strong> Adds terminal middleware that handles the request and generates a response. It does not call the next middleware in the pipeline.</li>
    <li><strong>Use():</strong> Adds middleware that can process requests and responses and optionally call the next middleware in the pipeline.</li>
    <li><strong>Map():</strong> Creates a new branch in the pipeline based on the request path and sets up a sub-pipeline for handling requests that match that path.</li>
</ul>

<h3>Pipeline Configuration Example</h3>

<pre><code class="language-csharp">
public class Startup
{
    public void Configure(IApplicationBuilder app)
    {
        app.Use(async (context, next) =&gt;
        {
            await context.Response.WriteAsync("Middleware 1 - Before next!\n");
            await next(); // Call the next middleware
            await context.Response.WriteAsync("Middleware 1 - After next!\n");
        });

        app.Map("/special", specialApp =&gt;
        {
            specialApp.Use(async (context, next) =&gt;
            {
                await context.Response.WriteAsync("Middleware for /special path\n");
                await next(); // Call the next middleware in the /special branch
            });
            specialApp.Run(async context =&gt;
            {
                await context.Response.WriteAsync("End of /special branch");
            });
        });

        app.Use(async (context, next) =&gt;
        {
            await context.Response.WriteAsync("Middleware 2\n");
            await next(); // Call the next middleware
        });

        app.Run(async context =&gt;
        {
            await context.Response.WriteAsync("Terminal Middleware\n");
        });
    }
}
</code></pre>

<p>In this example:</p>
<ul>
    <li><strong>Use():</strong> methods add general-purpose middleware that processes all requests.</li>
    <li><strong>Map():</strong> creates a branch in the pipeline for requests to <code>/special</code>.</li>
    <li><strong>Run():</strong> adds terminal middleware that handles the final response.</li>
</ul>
<p>These methods provide flexibility and control over how requests are handled in an ASP.NET Core application.</p>

    `,

    //MIDDLEWARE FILTERS
    'dotnet-middleware-filters': `
    <h2>Middleware and Filters in .NET Core</h2>

<p>In ASP.NET Core, both <strong>middleware</strong> and <strong>filters</strong> are mechanisms for handling requests and responses, but they serve different purposes and are used in different contexts. Here's a breakdown of their differences:</p>

<h3>Middleware</h3>
<p><strong>Definition:</strong> Middleware is a software component that is used to handle requests and responses in the HTTP pipeline. It is executed in a sequential order, allowing you to inspect, modify, or short-circuit requests and responses.</p>

<p><strong>Purpose:</strong> Middleware is designed to perform cross-cutting concerns such as logging, authentication, error handling, and request processing.</p>

<p><strong>Execution:</strong> Middleware is configured in the Startup class, specifically in the Configure method. Middleware components are executed in the order they are registered in the pipeline.</p>

<p><strong>Lifecycle:</strong> Middleware processes the request before it reaches the MVC controller or other components. It can also process the response as it exits the pipeline.</p>

<p><strong>Configuration:</strong></p>
<pre><code class="language-csharp">
public void Configure(IApplicationBuilder app)
{
    app.Use(async (context, next) =&gt;
    {
        // Logic before the next middleware
        await next.Invoke(); // Call the next middleware
        // Logic after the next middleware
    });

    app.Run(async context =&gt;
    {
        await context.Response.WriteAsync("Hello from middleware!");
    });
}
</code></pre>

<p><strong>Common Use Cases:</strong> Authentication, logging, exception handling, response compression, CORS, and static file serving.</p>

<h3>Filters</h3>
<p><strong>Definition:</strong> Filters are specific to the MVC framework and are used to run code before and after the execution of an action method. They provide a way to add logic that affects how controllers and actions are executed.</p>

<p><strong>Purpose:</strong> Filters are used for cross-cutting concerns within the MVC framework, such as authorization, validation, action result manipulation, and exception handling specific to actions and controllers.</p>

<p><strong>Execution:</strong> Filters are configured at the controller or action level and are executed in a specific order before and after the action method is invoked.</p>

<p><strong>Lifecycle:</strong> Filters run only during the execution of MVC actions. They do not handle the entire HTTP request/response pipeline like middleware.</p>

<p><strong>Configuration:</strong></p>
<pre><code class="language-csharp">
public class HomeController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }
}

// Example of a custom filter
public class MyCustomFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context)
    {
        // Logic before the action method is called
    }
    
    public void OnActionExecuted(ActionExecutedContext context)
    {
        // Logic after the action method is called
    }
}

// Registering the filter globally
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllersWithViews(options =&gt;
    {
        options.Filters.Add&lt;MyCustomFilter&gt;();
    });
}
</code></pre>

<p><strong>Common Use Cases:</strong> Authorization, action and result transformations, caching, exception handling within the context of MVC actions.</p>

<h3>Key Differences</h3>
<table>
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Middleware</th>
            <th>Filters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Scope</td>
            <td>Operates on the entire HTTP request/response pipeline.</td>
            <td>Operates specifically on MVC controllers and actions.</td>
        </tr>
        <tr>
            <td>Configuration</td>
            <td>Configured in the Startup class, Configure method.</td>
            <td>Configured at the controller or action level, or globally.</td>
        </tr>
        <tr>
            <td>Execution Order</td>
            <td>Sequential, based on the order of registration in the pipeline.</td>
            <td>Specified order of execution before and after actions.</td>
        </tr>
        <tr>
            <td>Lifecycle</td>
            <td>Handles requests and responses throughout the pipeline.</td>
            <td>Handles logic specific to action execution.</td>
        </tr>
        <tr>
            <td>Use Cases</td>
            <td>Logging, authentication, CORS, error handling, etc.</td>
            <td>Authorization, validation, result transformation, etc.</td>
        </tr>
    </tbody>
</table>

<h3>Example Use Cases</h3>

<p><strong>Middleware Example:</strong> Adding a global logging middleware to log every request.</p>
<pre><code class="language-csharp">
app.Use(async (context, next) =&gt;
{
    // Log request information
    Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
    await next.Invoke(); // Call the next middleware
});
</code></pre>

<p><strong>Filter Example:</strong> Creating a custom action filter to log information before and after an action method.</p>
<pre><code class="language-csharp">
public class LogActionFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context)
    {
        Console.WriteLine($"Executing action: {context.ActionDescriptor.DisplayName}");
    }
    
    public void OnActionExecuted(ActionExecutedContext context)
    {
        Console.WriteLine($"Executed action: {context.ActionDescriptor.DisplayName}");
    }
}
</code></pre>

<p>In summary, middleware handles broader aspects of request processing across the entire application, while filters provide specialized logic for MVC actions and controllers. Both are essential for building robust and maintainable web applications.</p>

    `,


    //DEPEDENCY INJECTION
    'dotnet-dependency-injection': `
    <h2>Dependency Injection</h2>

<p>Dependency Injection (DI) is a design pattern and a technique used in software development to achieve Inversion of Control (IoC) between classes and their dependencies. The primary goal of DI is to reduce the coupling between components in a system, making the system more modular, testable, and maintainable.</p>

<h3>Key Concepts of Dependency Injection</h3>

<h4>Inversion of Control (IoC)</h4>
<p><strong>Definition:</strong> IoC is a principle where the control of object creation and management is inverted from the application code to an external component (such as a DI container).</p>
<p><strong>Purpose:</strong> To decouple the code that uses services from the code that implements them, improving flexibility and testability.</p>

<h4>Dependency Injection</h4>
<p><strong>Definition:</strong> DI is a specific form of IoC where dependencies are injected into a class rather than the class creating or looking up its dependencies. This is done typically via constructor injection, property injection, or method injection.</p>

<p><strong>Types of Injection:</strong></p>
<ul>
    <li><strong>Constructor Injection:</strong> Dependencies are provided through the class constructor.</li>
    <li><strong>Property Injection:</strong> Dependencies are set through public properties.</li>
    <li><strong>Method Injection:</strong> Dependencies are passed directly to methods.</li>
</ul>

<h4>DI Container</h4>
<p><strong>Definition:</strong> A DI container (or IoC container) is a framework or library responsible for managing the lifecycle and resolution of dependencies. It handles the creation and injection of services.</p>
<p><strong>Purpose:</strong> To automate the process of dependency resolution, manage the lifecycle of services (e.g., singleton, transient), and facilitate the injection of dependencies.</p>

<h3>Benefits of Dependency Injection</h3>
<ul>
    <li><strong>Loose Coupling:</strong> DI helps in decoupling classes from their dependencies, making it easier to change or replace dependencies without modifying the dependent class.</li>
    <li><strong>Enhanced Testability:</strong> By injecting dependencies, you can easily replace real implementations with mocks or stubs in unit tests, facilitating better testing practices.</li>
    <li><strong>Improved Maintainability:</strong> Changes to dependencies or their implementations have minimal impact on the classes that use them, leading to cleaner and more maintainable code.</li>
    <li><strong>Configurability:</strong> DI containers often allow configuration of dependency lifetimes (e.g., singleton, scoped, transient) and registration of services, centralizing configuration management.</li>
</ul>

<h3>Dependency Injection in ASP.NET Core</h3>
<p>ASP.NET Core has built-in support for dependency injection. Here's how it typically works:</p>

<h4>Configure Services</h4>
<p>You define and register services in the ConfigureServices method of the Startup class. Services can be registered with different lifetimes: Singleton, Scoped, or Transient.</p>
<pre><code class="language-csharp">
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Register services
        services.AddSingleton&lt;ILogger, ConsoleLogger&gt;(); // Singleton service
        services.AddScoped&lt;IRepository, SqlRepository&gt;();  // Scoped service
        services.AddTransient&lt;IEmailService, SmtpEmailService&gt;(); // Transient service
    }
}
</code></pre>

<h4>Inject Dependencies</h4>
<p>Dependencies are injected into constructors, methods, or properties of controllers or services. ASP.NET Core's built-in DI container will resolve and provide the required dependencies.</p>
<pre><code class="language-csharp">
public class HomeController : Controller
{
    private readonly ILogger _logger;
    private readonly IRepository _repository;

    // Constructor injection
    public HomeController(ILogger logger, IRepository repository)
    {
        _logger = logger;
        _repository = repository;
    }

    public IActionResult Index()
    {
        _logger.Log("Index action called");
        var data = _repository.GetData();
        return View(data);
    }
}
</code></pre>

<h4>Example of Dependency Injection</h4>
<p>Here's a basic example of setting up DI in an ASP.NET Core application:</p>

<h5>Define Interfaces and Implementations</h5>
<pre><code class="language-csharp">
public interface IMessageService
{
    void SendMessage(string message);
}

public class EmailMessageService : IMessageService
{
    public void SendMessage(string message)
    {
        // Send email logic
    }
}
</code></pre>

<h5>Register Services in Startup</h5>
<pre><code class="language-csharp">
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddTransient&lt;IMessageService, EmailMessageService&gt;();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        // Middleware and request handling setup
    }
}
</code></pre>

<h5>Inject Service in Controller</h5>
<pre><code class="language-csharp">
public class HomeController : Controller
{
    private readonly IMessageService _messageService;

    public HomeController(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public IActionResult Send()
    {
        _messageService.SendMessage("Hello Dependency Injection!");
        return View();
    }
}
</code></pre>

<p>In this example:</p>
<ul>
    <li>IMessageService is an interface, and EmailMessageService is a concrete implementation.</li>
    <li>The service is registered in the DI container with AddTransient, which means a new instance will be created each time it is requested.</li>
    <li>The service is injected into the HomeController constructor, allowing it to be used within the controller.</li>
</ul>

<p>In summary, Dependency Injection is a powerful technique for achieving better software design and maintainability by managing dependencies and reducing coupling between components. ASP.NET Core provides robust support for DI, making it a central part of modern .NET applications.</p>

    `,


    //SERVICE LIFETIMES
    'dotnet-service-lifetimes': `
      <h2>Service Lifetimes</h2>

<p>In ASP.NET Core, service lifetimes define how long a service instance should be used and how it should be managed by the Dependency Injection (DI) container. There are three main service lifetimes:</p>

<h3>1. Singleton</h3>
<p><strong>Definition:</strong> A singleton service is created once and shared throughout the application's lifetime. Only one instance of the service is created and used by all requests and components.</p>
<p><strong>Lifecycle:</strong> The singleton instance is created when it is first requested, and the same instance is used for the entire application lifecycle.</p>
<p><strong>Use Case:</strong> Use singleton services for stateless services or services that maintain global state or configuration that should be consistent across the application.</p>
<h4>Configuration:</h4>
<pre><code class="language-csharp">
public class SingletonService : ISingletonService
{
    // Service implementation
}

public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton&lt;ISingletonService, SingletonService&gt;();
}
</code></pre>
<h4>Example:</h4>
<pre><code class="language-csharp">
public class SingletonService : ISingletonService
{
    public SingletonService()
    {
        // Initialization code
    }
}
</code></pre>

<h3>2. Scoped</h3>
<p><strong>Definition:</strong> A scoped service is created once per request (or per scope). Each HTTP request or scope gets its own instance of the service, and the same instance is used throughout the lifetime of that request or scope.</p>
<p><strong>Lifecycle:</strong> The scoped instance is created when a new scope is created (e.g., at the start of an HTTP request) and is disposed of at the end of the scope.</p>
<p><strong>Use Case:</strong> Use scoped services for operations that require a unique instance per request, such as database contexts or services that need to maintain request-specific data.</p>
<h4>Configuration:</h4>
<pre><code class="language-csharp">
public class ScopedService : IScopedService
{
    // Service implementation
}

public void ConfigureServices(IServiceCollection services)
{
    services.AddScoped&lt;IScopedService, ScopedService&gt;();
}
</code></pre>
<h4>Example:</h4>
<pre><code class="language-csharp">
public class ScopedService : IScopedService
{
    public ScopedService()
    {
        // Initialization code
    }
}
</code></pre>

<h3>3. Transient</h3>
<p><strong>Definition:</strong> A transient service is created each time it is requested. Every request for the service results in a new instance being created.</p>
<p><strong>Lifecycle:</strong> The transient instance is created and disposed of immediately after the request is completed, and a new instance is created for every new request.</p>
<p><strong>Use Case:</strong> Use transient services for lightweight, stateless services or services where the instance state is not required to be maintained across requests.</p>
<h4>Configuration:</h4>
<pre><code class="language-csharp">
public class TransientService : ITransientService
{
    // Service implementation
}

public void ConfigureServices(IServiceCollection services)
{
    services.AddTransient&lt;ITransientService, TransientService&gt;();
}
</code></pre>
<h4>Example:</h4>
<pre><code class="language-csharp">
public class TransientService : ITransientService
{
    public TransientService()
    {
        // Initialization code
    }
}
</code></pre>

<h3>Summary of Service Lifetimes</h3>
<table>
    <thead>
        <tr>
            <th>Lifetime</th>
            <th>Description</th>
            <th>Instance Creation</th>
            <th>Scope</th>
            <th>Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Singleton</td>
            <td>Single instance for the entire application.</td>
            <td>Once per application.</td>
            <td>Application lifetime.</td>
            <td>Global state, configuration settings.</td>
        </tr>
        <tr>
            <td>Scoped</td>
            <td>One instance per request or scope.</td>
            <td>Once per request.</td>
            <td>Request or custom scope.</td>
            <td>Request-specific data, database contexts.</td>
        </tr>
        <tr>
            <td>Transient</td>
            <td>New instance each time it is requested.</td>
            <td>Each request.</td>
            <td>No scope; instance is short-lived.</td>
            <td>Lightweight, stateless services.</td>
        </tr>
    </tbody>
</table>

<h3>Choosing the Right Lifetime</h3>
<ul>
    <li><strong>Singleton:</strong> Use when you need a single, shared instance that maintains state or configuration across the entire application.</li>
    <li><strong>Scoped:</strong> Use when you need an instance that is unique to each request or scope, ideal for services that interact with request-specific data.</li>
    <li><strong>Transient:</strong> Use when you need a new instance every time, suitable for stateless services or operations.</li>
</ul>

<p>By properly selecting the service lifetime based on the needs of your application, you can optimize performance, manage resource usage effectively, and ensure that your services operate as intended.</p>

    `,

    //AJAX
    'general-ajax': `
      <h3>AJAX</h3>
      <p>AJAX (Asynchronous JavaScript and XML) is used to send and receive data asynchronously without refreshing the page.</p>
    `,


    //VIEWSTATE SESSION
    'general-viewstate-session': `
      <h1>View State vs. Session State</h1>

<p>In ASP.NET, View State and Session State are two different mechanisms for maintaining state across requests, but they are used for different purposes and behave in distinct ways. Here's a detailed comparison of both:</p>

<h2>1. View State</h2>

<p><strong>Purpose:</strong></p>
<ul>
    <li>View State is used to preserve the state of individual web controls or pages between postbacks. It's a client-side state management technique.</li>
    <li>It is useful for maintaining control data between HTTP requests, which is otherwise stateless due to the HTTP protocol.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li>View State stores the state of a page's controls as a hidden field (<code>__VIEWSTATE</code>) on the page itself.</li>
    <li>When a page is posted back to the server (e.g., after a form submission), the View State data is sent back with the request, and the server uses it to restore the control's state.</li>
</ul>

<p><strong>Storage:</strong></p>
<ul>
    <li><strong>Client-Side:</strong> View State is embedded in the page as a hidden field (base64-encoded). This data is sent back and forth between the client and server with every request and response.</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>&lt;asp:TextBox ID="TextBox1" runat="server" EnableViewState="true"&gt;&lt;/asp:TextBox&gt;
</code></pre>

<p><strong>Advantages:</strong></p>
<ul>
    <li><strong>No server resources:</strong> Since it's stored on the client, it doesn't consume server memory.</li>
    <li><strong>Simple to use:</strong> Works automatically with controls, and no configuration is needed to use it.</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
    <li><strong>Performance overhead:</strong> Large View State sizes can lead to performance issues as the hidden field data is sent with each request, increasing page load times.</li>
    <li><strong>Security concerns:</strong> Though the View State is base64-encoded, it's not encrypted by default, making it potentially vulnerable to tampering. You can, however, enable encryption for View State for better security.</li>
</ul>

<p><strong>Best Use Case:</strong></p>
<ul>
    <li>Use View State when you want to preserve control values between postbacks (e.g., keeping form field data intact after submitting).</li>
</ul>

<h2>2. Session State</h2>

<p><strong>Purpose:</strong></p>
<ul>
    <li>Session State is used to store information about the user’s session across multiple requests. It is a server-side state management technique.</li>
    <li>Each user gets a unique session, and data stored in the session is available throughout the user's entire session, regardless of which page they are visiting.</li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
    <li>Session state stores data on the server, and each user is given a unique Session ID, which is either stored in a cookie or passed through the query string.</li>
    <li>This session ID is used to retrieve the user's data from the session store, which is kept on the server.</li>
</ul>

<p><strong>Storage:</strong></p>
<ul>
    <li><strong>Server-Side:</strong> The data is stored in memory, a database, or a distributed session store depending on the session management configuration (InProc, StateServer, SQLServer, etc.).</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>// Storing data in session
Session["UserName"] = "Zeeshan";

// Retrieving data from session
string userName = (string)Session["UserName"];
</code></pre>

<p><strong>Advantages:</strong></p>
<ul>
    <li><strong>Secure:</strong> Since the data is stored on the server, it is more secure compared to client-side storage mechanisms.</li>
    <li><strong>Persistent:</strong> Data can persist across multiple pages and requests for the duration of the session.</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
    <li><strong>Server resource usage:</strong> Session state consumes server memory for each user, which can affect scalability.</li>
    <li><strong>Timeouts:</strong> Sessions have a default timeout (usually 20 minutes), after which the session data is lost unless you configure session persistence or extend the timeout.</li>
</ul>

<p><strong>Best Use Case:</strong></p>
<ul>
    <li>Use session state for user-specific data that needs to be shared across multiple pages or requests (e.g., user login information, shopping cart data).</li>
</ul>

<h2>Key Differences:</h2>
<table>
    <thead>
        <tr>
            <th>Aspect</th>
            <th>View State</th>
            <th>Session State</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Storage Location</td>
            <td>Client-side (hidden field in the page)</td>
            <td>Server-side (server memory, database, etc.)</td>
        </tr>
        <tr>
            <td>Scope</td>
            <td>Per page, per control (only persists during postback on the same page)</td>
            <td>Per user, persists across multiple pages</td>
        </tr>
        <tr>
            <td>Persistence</td>
            <td>Limited to a single page (postback)</td>
            <td>Persists for the entire session, across pages</td>
        </tr>
        <tr>
            <td>Lifetime</td>
            <td>Until the page is posted back</td>
            <td>Until the session times out or is abandoned</td>
        </tr>
        <tr>
            <td>Security</td>
            <td>Base64-encoded, can be encrypted but not secure by default</td>
            <td>More secure since it's stored on the server</td>
        </tr>
        <tr>
            <td>Performance Impact</td>
            <td>Can bloat page size (since it's part of the HTML)</td>
            <td>Can affect server memory usage</td>
        </tr>
        <tr>
            <td>Size Limit</td>
            <td>Limited by page size</td>
            <td>Can hold more data (server-side capacity)</td>
        </tr>
        <tr>
            <td>Use Case</td>
            <td>Preserving state of controls during postbacks</td>
            <td>Storing user-specific data across requests</td>
        </tr>
    </tbody>
</table>

<h2>When to Use:</h2>
<ul>
    <li><strong>Use View State:</strong></li>
    <ul>
        <li>When you need to persist the state of controls on a page across postbacks (e.g., keeping form values intact after submitting).</li>
        <li>Ideal for small pieces of data that don't need to be stored beyond the life of the page.</li>
    </ul>
    <li><strong>Use Session State:</strong></li>
    <ul>
        <li>When you need to store user-specific data (like login information, preferences, or shopping cart items) that should be available across multiple pages during a user session.</li>
        <li>Ideal for sensitive data that should not be exposed to the client.</li>
    </ul>
</ul>
  `,


  //COOKIES
    'general-cookies': `
      <h3>Types of Cookies</h3>
<p>In web development, cookies are small pieces of data stored on the client’s browser that allow stateful communication between clients and servers. Cookies can be classified into several types based on their purpose, lifespan, and security properties. Here’s a breakdown of the main types of cookies:</p>

<h4>1. Session Cookies</h4>
<p><strong>Definition:</strong> Session cookies are temporary cookies that exist only while the user is browsing the website. They are deleted once the user closes the browser.</p>
<p><strong>Lifespan:</strong> They are stored in memory and automatically deleted when the session ends (i.e., when the browser is closed).</p>
<p><strong>Use Case:</strong> Used to store information about the user's session, such as login status, user preferences during the session, and shopping cart contents.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: sessionID=abc123; path=/; HttpOnly;</code></pre>

<h4>2. Persistent Cookies</h4>
<p><strong>Definition:</strong> Persistent cookies remain on the user's device even after the browser is closed, until they expire or are manually deleted.</p>
<p><strong>Lifespan:</strong> They have an expiration date or a maximum age specified in the cookie attributes. They remain stored on the client’s device until they expire or are deleted by the user.</p>
<p><strong>Use Case:</strong> These cookies are often used to remember user preferences, login details, or any long-term data. For example, a website might remember a user's language preference or keep the user logged in.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: rememberMe=true; expires=Tue, 10 Sep 2025 10:00:00 GMT; path=/;</code></pre>

<h4>3. Secure Cookies</h4>
<p><strong>Definition:</strong> Secure cookies are only sent over secure connections (i.e., HTTPS). They are never sent over HTTP connections to prevent data leakage.</p>
<p><strong>Lifespan:</strong> Can be session or persistent cookies, but they are marked as "secure" and are sent only via HTTPS.</p>
<p><strong>Use Case:</strong> Used to transmit sensitive information, like authentication tokens, over secure channels.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: authToken=xyz789; path=/; Secure; HttpOnly;</code></pre>

<h4>4. HttpOnly Cookies</h4>
<p><strong>Definition:</strong> These cookies cannot be accessed by JavaScript running on the web page. They are designed to reduce the risk of cross-site scripting (XSS) attacks by ensuring that client-side scripts cannot read or manipulate the cookie.</p>
<p><strong>Lifespan:</strong> Can be either session or persistent cookies, but they are marked with the HttpOnly flag.</p>
<p><strong>Use Case:</strong> Commonly used to store sensitive session information, such as session tokens or authentication data.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: sessionToken=abc123; path=/; HttpOnly;</code></pre>

<h4>5. SameSite Cookies</h4>
<p><strong>Definition:</strong> SameSite cookies restrict how cookies are sent with requests from third-party websites, which helps protect against cross-site request forgery (CSRF) attacks.</p>
<p><strong>Lifespan:</strong> Can be session or persistent cookies with the SameSite attribute set to either Strict, Lax, or None.</p>
<p><strong>SameSite Modes:</strong></p>
<ul>
  <li><strong>SameSite=Strict:</strong> Cookies are not sent with requests coming from external sites (strictest setting).</li>
  <li><strong>SameSite=Lax:</strong> Cookies are only sent with top-level navigation from external sites (less strict).</li>
  <li><strong>SameSite=None:</strong> Cookies are sent with all requests (requires Secure flag to be set when using None).</li>
</ul>
<p><strong>Use Case:</strong> Enhances security by restricting how cookies are sent in cross-site requests.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: csrfToken=def456; path=/; SameSite=Strict;</code></pre>

<h4>6. First-Party Cookies</h4>
<p><strong>Definition:</strong> First-party cookies are set by the website the user is currently visiting. They belong to the same domain as the website in the address bar.</p>
<p><strong>Use Case:</strong> These cookies are typically used to store user-specific settings and data for the same website, such as login details, language preferences, or shopping cart information.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: language=en; path=/; domain=example.com;</code></pre>

<h4>7. Third-Party Cookies</h4>
<p><strong>Definition:</strong> Third-party cookies are set by domains other than the one the user is currently visiting. These are usually used by advertising networks, social media widgets, and analytics services.</p>
<p><strong>Use Case:</strong> Commonly used for tracking users across different websites to deliver targeted advertising or gather analytics data.</p>
<p><strong>Example:</strong></p>
<pre><code>Set-Cookie: adTrackerID=xyz123; domain=adnetwork.com;</code></pre>

<h4>8. Zombie Cookies</h4>
<p><strong>Definition:</strong> These are cookies that are automatically recreated after being deleted by the user. They are often stored in multiple locations, like Flash storage or HTML5 web storage, allowing them to be restored after deletion.</p>
<p><strong>Use Case:</strong> They are typically used for persistent tracking even after the user has tried to delete cookies. This practice is controversial and may violate user privacy.</p>

<h4>9. Super Cookies</h4>
<p><strong>Definition:</strong> Super cookies are a type of tracking cookie that is stored outside the regular cookie storage locations (like at the network level). Internet Service Providers (ISPs) or websites may use these to track users' activities more persistently.</p>
<p><strong>Use Case:</strong> Mostly used for tracking users' behavior across websites or network services. Super cookies are considered a significant privacy concern.</p>

<h4>10. Flash Cookies (Local Shared Objects)</h4>
<p><strong>Definition:</strong> Flash cookies are stored by Adobe Flash and are not part of the browser’s regular cookie storage. They can store more data and persist even after the user deletes regular cookies.</p>
<p><strong>Use Case:</strong> Used for tracking and retaining user data. However, they have fallen out of favor as Flash usage has declined.</p>

<h4>Summary of Cookie Types:</h4>
<table>
  <thead>
    <tr>
      <th>Cookie Type</th>
      <th>Storage</th>
      <th>Lifespan</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Session Cookies</td>
      <td>Client-side</td>
      <td>Until browser closes</td>
      <td>Maintain session state (e.g., login status)</td>
    </tr>
    <tr>
      <td>Persistent Cookies</td>
      <td>Client-side</td>
      <td>Until expiry date</td>
      <td>Remember user preferences, login, etc.</td>
    </tr>
    <tr>
      <td>Secure Cookies</td>
      <td>Client-side</td>
      <td>Session or persistent</td>
      <td>Store sensitive data (only sent over HTTPS)</td>
    </tr>
    <tr>
      <td>HttpOnly Cookies</td>
      <td>Client-side</td>
      <td>Session or persistent</td>
      <td>Prevent access by JavaScript (security)</td>
    </tr>
    <tr>
      <td>SameSite Cookies</td>
      <td>Client-side</td>
      <td>Session or persistent</td>
      <td>Protect against CSRF attacks</td>
    </tr>
    <tr>
      <td>First-Party Cookies</td>
      <td>Client-side</td>
      <td>Session or persistent</td>
      <td>Store data related to the current domain</td>
    </tr>
    <tr>
      <td>Third-Party Cookies</td>
      <td>Client-side</td>
      <td>Session or persistent</td>
      <td>Track users across multiple websites</td>
    </tr>
    <tr>
      <td>Zombie Cookies</td>
      <td>Client-side</td>
      <td>Persistent</td>
      <td>Persist even after deletion (controversial)</td>
    </tr>
    <tr>
      <td>Super Cookies</td>
      <td>Outside browser</td>
      <td>Persistent</td>
      <td>Track users at the network level</td>
    </tr>
    <tr>
      <td>Flash Cookies</td>
      <td>Outside browser</td>
      <td>Persistent</td>
      <td>Store larger amounts of data (now deprecated)</td>
    </tr>
  </tbody>
</table>
 `,
    'general-ado-net': `
      <h3>ADO.NET</h3>
      <p>ADO.NET is a set of classes in the .NET Framework that provides data access services to .NET applications.</p>
    `,


    //MVC ROUTING
    'general-mvc-routing': `
    <h3>Types of MVC Routing</h3>
<p>In ASP.NET MVC (Model-View-Controller), routing is the mechanism that maps incoming requests (URLs) to specific controller actions. The routing system is highly flexible and supports multiple types of routing patterns. Below are the different types of routing concepts used in ASP.NET MVC:</p>

<h4>1. Convention-Based Routing (Traditional Routing)</h4>
<p><strong>Definition:</strong> In convention-based routing, you define routes in the RouteConfig.cs file (or in Startup.cs for newer versions). This approach follows a pattern or convention for defining routes.</p>
<p><strong>How It Works:</strong> The default route template is usually <code>{controller}/{action}/{id}</code>, where:</p>
<ul>
  <li><code>controller</code> corresponds to the controller name.</li>
  <li><code>action</code> corresponds to the action method.</li>
  <li><code>id</code> is an optional parameter (used to pass additional data).</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>public class RouteConfig
{
    public static void RegisterRoutes(RouteCollection routes)
    {
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

        routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
        );
    }
}</code></pre>
<p><strong>How it Resolves URLs:</strong></p>
<ul>
  <li><code>/Home/Index</code> maps to <code>HomeController.Index()</code>.</li>
  <li><code>/Products/Details/5</code> maps to <code>ProductsController.Details(5)</code>.</li>
</ul>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Easy to implement.</li>
  <li>Follows predictable conventions.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Limited flexibility for complex routing patterns.</li>
</ul>

<h4>2. Attribute-Based Routing</h4>
<p><strong>Definition:</strong> Attribute-based routing allows you to define routes directly on the controller and action methods using attributes. This provides more flexibility and control over the routes.</p>
<p><strong>How It Works:</strong> You decorate the controller actions with route attributes ([Route]), specifying the route directly on the action or controller.</p>
<p><strong>Example:</strong></p>
<pre><code>[Route("Products")]
public class ProductsController : Controller
{
    [Route("Details/{id}")]
    public ActionResult Details(int id)
    {
        // Action logic
    }

    [Route("List/{category}/{page}")]
    public ActionResult List(string category, int page)
    {
        // Action logic
    }
}</code></pre>
<p><strong>How it Resolves URLs:</strong></p>
<ul>
  <li><code>/Products/Details/5</code> maps to <code>ProductsController.Details(5)</code>.</li>
  <li><code>/Products/List/electronics/2</code> maps to <code>ProductsController.List("electronics", 2)</code>.</li>
</ul>
<p><strong>Advantages:</strong></p>
<ul>
  <li>More control: You can define custom, non-standard routes easily.</li>
  <li>Readability: Routes are directly associated with controller methods.</li>
  <li>Support for RESTful APIs: Useful when creating RESTful APIs with clean, readable URLs.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Can become harder to manage with a large number of routes.</li>
</ul>
<p><strong>Enabling Attribute Routing:</strong> You need to enable attribute routing in the RouteConfig.cs file (or Startup.cs):</p>
<pre><code>public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();  // Enable attribute routing
}</code></pre>

<h4>3. Custom Routing</h4>
<p><strong>Definition:</strong> Custom routing allows developers to write their own logic to determine how routes are resolved. This can be done by creating custom route constraints or custom route handlers.</p>
<p><strong>How It Works:</strong></p>
<ul>
  <li>You can define custom routes by implementing the <code>IRouteHandler</code> or by adding custom route constraints.</li>
</ul>
<p><strong>Example: Custom Route Constraint</strong></p>
<pre><code>public class CustomRouteConstraint : IRouteConstraint
{
    public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
    {
        // Custom logic to match the route
        return (string)values["controller"] == "Home";
    }
}

public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapRoute(
        name: "CustomRoute",
        url: "{controller}/{action}/{id}",
        defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
        constraints: new { controller = new CustomRouteConstraint() }
    );
}</code></pre>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Highly flexible: You can define complex rules to control how routes are processed.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Requires more effort and can increase complexity.</li>
</ul>

<h4>4. Area Routing</h4>
<p><strong>Definition:</strong> Area routing is used to divide large applications into smaller functional modules (areas). Each area can have its own set of controllers, views, and routes. Routing for areas is handled separately from the global routing configuration.</p>
<p><strong>How It Works:</strong> Each area has its own <code>AreaRegistration</code> file where routes are defined specifically for that area.</p>
<p><strong>Example:</strong></p>
<pre><code>public class AdminAreaRegistration : AreaRegistration
{
    public override string AreaName
    {
        get { return "Admin"; }
    }

    public override void RegisterArea(AreaRegistrationContext context)
    {
        context.MapRoute(
            name: "Admin_default",
            url: "Admin/{controller}/{action}/{id}",
            defaults: new { action = "Index", id = UrlParameter.Optional }
        );
    }
}</code></pre>
<p><strong>How it Resolves URLs:</strong></p>
<ul>
  <li><code>/Admin/Users/Index</code> maps to the <code>UsersController</code> in the Admin area.</li>
</ul>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Useful for organizing large applications into smaller, manageable parts.</li>
  <li>Each area can have its own routing logic.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Routing can become more complex when managing multiple areas.</li>
</ul>

<h4>5. Catch-All Route</h4>
<p><strong>Definition:</strong> A catch-all route is a type of route that matches all remaining URL patterns that do not match any other routes defined earlier. It is typically defined at the end of the route table.</p>
<p><strong>How It Works:</strong> The route uses a special wildcard syntax (<code>*</code>) to capture all remaining parts of the URL.</p>
<p><strong>Example:</strong></p>
<pre><code>routes.MapRoute(
    name: "CatchAllRoute",
    url: "{*url}",
    defaults: new { controller = "Error", action = "NotFound" }
);</code></pre>
<p><strong>How it Resolves URLs:</strong></p>
<ul>
  <li>Any URL that doesn't match previous routes will be caught by the catch-all route, and it can redirect users to a custom 404 error page or another fallback route.</li>
</ul>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Useful for handling 404 errors or unknown URLs.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Should be placed last in the routing configuration to avoid overriding more specific routes.</li>
</ul>

<h4>6. Route Constraints</h4>
<p><strong>Definition:</strong> Route constraints allow you to restrict which URLs a route will match by placing conditions on route parameters.</p>
<p><strong>How It Works:</strong> You can apply constraints to route parameters to ensure that only URLs meeting certain criteria (such as being numeric) will match the route.</p>
<p><strong>Example:</strong></p>
<pre><code>routes.MapRoute(
    name: "NumericRoute",
    url: "Products/{id}",
    defaults: new { controller = "Products", action = "Details" },
    constraints: new { id = @"\d+" }  // Only matches numeric IDs
);</code></pre>
<p><strong>How it Resolves URLs:</strong></p>
<ul>
  <li><code>/Products/123</code> would match, but <code>/Products/abc</code> would not.</li>
</ul>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Adds flexibility by enforcing rules on routes.</li>
  <li>Ensures that invalid or unwanted URLs do not reach specific actions.</li>
</ul>

<h4>Summary of Routing Types:</h4>
<table>
  <thead>
    <tr>
      <th>Routing Type</th>
      <th>Description</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Convention-Based</td>
      <td>Uses a pattern or convention for defining routes in RouteConfig.cs.</td>
      <td>Default routing, simple apps.</td>
    </tr>
    <tr>
      <td>Attribute-Based</td>
      <td>Routes are defined using attributes directly on controller actions.</td>
      <td>RESTful APIs, custom routes per action.</td>
    </tr>
    <tr>
      <td>Custom Routing</td>
      <td>Custom logic for resolving routes.</td>
      <td>Complex route matching requirements.</td>
    </tr>
    <tr>
      <td>Area Routing</td>
      <td>Separate routes for different application areas.</td>
      <td>Large apps divided into modules (Admin, User, etc.).</td>
    </tr>
    <tr>
      <td>Catch-All Route</td>
      <td>Captures all unmatched URLs.</td>
      <td>404 error handling, fallback routes.</td>
    </tr>
    <tr>
      <td>Route Constraints</td>
      <td>Adds constraints (like regex) to ensure routes match specific criteria.</td>
      <td>When you need strict URL patterns (e.g., numeric IDs).</td>
    </tr>
  </tbody>
</table>

    `,
    //SESSION MANAGEMENT
    'general-session-management': `
    <h3>Session Management</h3>
<p>Session Management in web applications refers to techniques used to maintain the state of user interactions across multiple requests. Since HTTP is a stateless protocol, it doesn't inherently remember previous interactions between the server and the client. Session management is essential to maintain a user’s identity, preferences, and other data throughout a browsing session.</p>

<p>In ASP.NET, session management allows storing and retrieving user-specific data on the server side for the duration of the user’s session. The session starts when a user first requests a page and ends after the user stops interacting with the server for a specified timeout period or when they manually log out.</p>

<h4>Types of Session Management Techniques</h4>

<h5>1. In-Process (InProc) Session State</h5>
<p><strong>Definition:</strong> In-Process session management stores session data in the memory of the web server that is processing the request.</p>
<p><strong>How It Works:</strong> Session data is kept in the same memory space as the application, which provides fast access. However, if the server restarts or the application pool is recycled, the session data is lost.</p>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Fast access to session data.</li>
  <li>Easy to configure.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Not suitable for web farm environments (multiple servers) without sticky sessions.</li>
  <li>Session data is lost if the server crashes or is restarted.</li>
  <li>Not scalable for large applications.</li>
</ul>
<p><strong>Example Configuration in web.config:</strong></p>
<pre><code>&lt;sessionState mode="InProc" timeout="20" /&gt;</code></pre>

<h5>2. Out-of-Process (StateServer) Session State</h5>
<p><strong>Definition:</strong> Out-of-Process session management stores session data in a separate process (StateServer) on the same or a different machine.</p>
<p><strong>How It Works:</strong> The session data is stored in an external state server, making it independent of the web server’s process. This setup is useful in web farm scenarios where multiple web servers handle user requests.</p>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Session data persists even if the web application is restarted.</li>
  <li>Suitable for web farm environments.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Slower access compared to InProc because session data must be serialized and sent to the state server.</li>
  <li>Requires additional setup (installing and configuring the state server).</li>
</ul>
<p><strong>Example Configuration:</strong></p>
<pre><code>&lt;sessionState mode="StateServer" stateConnectionString="tcpip=127.0.0.1:42424" timeout="20" /&gt;</code></pre>

<h5>3. SQL Server Session State</h5>
<p><strong>Definition:</strong> Session data is stored in a SQL Server database, providing a robust solution for maintaining session state across web farms or multiple server instances.</p>
<p><strong>How It Works:</strong> Session data is stored in a SQL Server database, ensuring persistence even if the web server or application pool is restarted. Data is shared across servers, making it a scalable option for large applications.</p>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Scalable and reliable session management.</li>
  <li>Session data persists across application restarts, server crashes, or web farm environments.</li>
  <li>Ideal for applications with large amounts of session data.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Slower access compared to InProc because session data needs to be retrieved from a database.</li>
  <li>Requires proper configuration and maintenance of the SQL Server instance.</li>
</ul>
<p><strong>Example Configuration:</strong></p>
<pre><code>&lt;sessionState mode="SQLServer" sqlConnectionString="data source=localhost;Initial Catalog=SessionDB;Integrated Security=True;" timeout="20" /&gt;</code></pre>

<h5>4. Custom Session State</h5>
<p><strong>Definition:</strong> Custom session state allows developers to store session data in a custom storage medium, such as Redis, NoSQL databases, or any other external storage system.</p>
<p><strong>How It Works:</strong> Developers can create custom session providers by implementing the SessionStateStoreProviderBase class to store and retrieve session data from a custom data store.</p>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Full control over how and where session data is stored.</li>
  <li>Can be tailored to specific application needs, such as using distributed storage like Redis or custom file systems.</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Requires more effort and custom implementation.</li>
  <li>May introduce complexity and performance overhead.</li>
</ul>

<h5>5. Cookie-Based Sessions</h5>
<p><strong>Definition:</strong> In this technique, session data is stored on the client side, typically using cookies. ASP.NET uses a session identifier stored in a cookie to associate a user with a session on the server.</p>
<p><strong>How It Works:</strong> The server assigns a unique session ID to each client and stores this ID in a session cookie on the user's browser. On subsequent requests, the browser sends the session ID back to the server, allowing the server to retrieve the associated session data.</p>
<p><strong>Advantages:</strong></p>
<ul>
  <li>Minimal server-side storage requirements.</li>
  <li>Session persistence across server restarts (as long as the session cookie is valid).</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
  <li>Limited by the browser's cookie storage limits (4KB).</li>
  <li>Client-side storage may pose security risks if not handled properly (e.g., by using encryption).</li>
  <li>Sessions can be cleared if cookies are disabled or deleted by the user.</li>
</ul>

<h4>Session Management Key Concepts</h4>

<h5>Session ID:</h5>
<p>Each user is assigned a unique session ID, which is used to track their session data. This session ID is usually stored in a cookie (ASP.NET_SessionId).</p>

<h5>Session Timeout:</h5>
<p>Sessions expire after a certain period of inactivity. This timeout can be configured in the web.config file.</p>
<p><strong>Example:</strong></p>
<pre><code>&lt;sessionState timeout="20" /&gt;</code></pre>

<h5>Session Storage:</h5>
<p>Data stored in a session is available to the server during the entire user session. Developers can store objects, user preferences, and stateful information within a session.</p>

<h5>Session Security:</h5>
<p>Use SSL (HTTPS) to ensure that the session ID is not intercepted by third parties. For sensitive data, consider using session state in conjunction with other security measures (like encryption or HttpOnly cookies).</p>

<h4>Comparison of Session Management Techniques</h4>
<table>
  <thead>
    <tr>
      <th>Session Type</th>
      <th>Storage</th>
      <th>Persistence</th>
      <th>Performance</th>
      <th>Best Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InProc</td>
      <td>Web server memory</td>
      <td>Lost if server restarts</td>
      <td>Fastest (memory-based)</td>
      <td>Small-scale applications on single servers.</td>
    </tr>
    <tr>
      <td>StateServer</td>
      <td>External server</td>
      <td>Persists across web servers</td>
      <td>Slower than InProc</td>
      <td>Web farm environments.</td>
    </tr>
    <tr>
      <td>SQL Server</td>
      <td>SQL database</td>
      <td>Persists across servers</td>
      <td>Slower (depends on DB access)</td>
      <td>Large applications requiring scalability and reliability.</td>
    </tr>
    <tr>
      <td>Custom</td>
      <td>Custom storage</td>
      <td>Depends on implementation</td>
      <td>Depends on implementation</td>
      <td>Applications with specific storage needs (e.g., Redis).</td>
    </tr>
    <tr>
      <td>Cookie-Based</td>
      <td>Client browser</td>
      <td>Persists across requests</td>
      <td>Fast (client-side)</td>
      <td>Applications with minimal server-side storage requirements.</td>
    </tr>
  </tbody>
</table>

<h4>How ASP.NET Manages Sessions</h4>
<ul>
  <li><strong>Session Start:</strong> When a user first makes a request, a new session ID is generated and assigned to the user.</li>
  <li><strong>Session Data Access:</strong> The session is accessed using the HttpContext.Session property.</li>
  <li><strong>Session End:</strong> When the session times out (due to inactivity or manual logout), the session is destroyed.</li>
</ul>

<h5>Example of Using Session in ASP.NET</h5>
<pre><code>
// Storing data in session
Session["UserName"] = "Zeeshan";

// Retrieving data from session
string userName = Session["UserName"].ToString();

// Removing a session item
Session.Remove("UserName");

// Abandoning the session (ends the session)
Session.Abandon();
</code></pre>

<h4>Best Practices for Session Management</h4>
<ul>
  <li>Limit Session Data: Store only essential information in sessions to reduce memory usage and improve performance.</li>
  <li>Secure Session Data: Always use HTTPS to protect session data in transit, and avoid storing sensitive information directly in the session.</li>
  <li>Optimize Session Timeout: Set an appropriate session timeout based on the application’s usage to balance user experience and resource usage.</li>
  <li>Use Cookies Securely: When using cookie-based session management, ensure that cookies are marked as HttpOnly and Secure to prevent JavaScript access and transmission over insecure channels.</li>
</ul>
 
    `,


    //CONTROLLER ACTION RETURN TYPES
    'general-action-return-types': `
      <div>
    <h2>Different Return Types of a Controller Action Method</h2>
    <p>In ASP.NET MVC, a controller action method can return different types based on the intended result. The return type determines what the action sends back to the client. Here are the most commonly used return types:</p>

    <h3>1. ViewResult</h3>
    <p><strong>Definition:</strong> Returns a view to the client (HTML page).</p>
    <p><strong>Use Case:</strong> When you want to render an HTML view (like a webpage) using a .cshtml file.</p>
    <pre><code>public ActionResult Index() {
    return View();  // Returns a view
}</code></pre>

    <h3>2. JsonResult</h3>
    <p><strong>Definition:</strong> Returns JSON-formatted data to the client.</p>
    <p><strong>Use Case:</strong> When the client (typically JavaScript or an AJAX call) expects data in JSON format.</p>
    <pre><code>public JsonResult GetData() {
    var data = new { Name = "Zeeshan", Age = 30 };
    return Json(data, JsonRequestBehavior.AllowGet);
}</code></pre>

    <h3>3. RedirectResult</h3>
    <p><strong>Definition:</strong> Redirects to another URL.</p>
    <p><strong>Use Case:</strong> When you need to redirect the client to another URL (could be an external or internal URL).</p>
    <pre><code>public ActionResult RedirectToGoogle() {
    return Redirect("https://www.google.com");  // Redirects to an external site
}</code></pre>

    <h3>4. RedirectToRouteResult</h3>
    <p><strong>Definition:</strong> Redirects to another action method using route parameters.</p>
    <p><strong>Use Case:</strong> When you need to redirect to a different action within the same or different controller using the routing system.</p>
    <pre><code>public ActionResult RedirectToHome() {
    return RedirectToAction("Index", "Home");  // Redirects to HomeController's Index action
}</code></pre>

    <h3>5. ContentResult</h3>
    <p><strong>Definition:</strong> Returns raw string content (text, HTML, etc.) to the client.</p>
    <p><strong>Use Case:</strong> When you need to return a plain string or custom data (such as XML or plain HTML).</p>
    <pre><code>public ActionResult GetContent() {
    return Content("Hello, this is plain text.");  // Returns plain text
}</code></pre>

    <h3>6. FileResult</h3>
    <p><strong>Definition:</strong> Returns a file to be downloaded or viewed by the client.</p>
    <p><strong>Use Case:</strong> When you need to serve files (e.g., PDFs, images, Word documents).</p>
    <pre><code>public ActionResult DownloadFile() {
    byte[] fileBytes = System.IO.File.ReadAllBytes(@"path-to-file");
    return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, "example.pdf");
}</code></pre>

    <h3>7. EmptyResult</h3>
    <p><strong>Definition:</strong> Returns nothing (an empty response) to the client.</p>
    <p><strong>Use Case:</strong> When no data or view is required to be sent back. It’s essentially a no-operation response.</p>
    <pre><code>public ActionResult DoNothing() {
    return new EmptyResult();  // Returns an empty response
}</code></pre>

    <h3>8. HttpStatusCodeResult</h3>
    <p><strong>Definition:</strong> Returns a specific HTTP status code to the client (e.g., 404, 500).</p>
    <p><strong>Use Case:</strong> When you want to send a custom HTTP status code as a response.</p>
    <pre><code>public ActionResult NotFoundPage() {
    return new HttpStatusCodeResult(404);  // Returns 404 Not Found
}</code></pre>

    <h3>9. PartialViewResult</h3>
    <p><strong>Definition:</strong> Returns a partial view to the client.</p>
    <p><strong>Use Case:</strong> When you need to return a small part of a page (partial view) as opposed to a full HTML view.</p>
    <pre><code>public ActionResult LoadPartialView() {
    return PartialView("_MyPartialView");  // Returns a partial view
}</code></pre>

    <h3>10. ActionResult</h3>
    <p><strong>Definition:</strong> Base class for all other return types. This allows a controller action to return different types (views, JSON, redirects, etc.).</p>
    <p><strong>Use Case:</strong> When the return type can vary dynamically (e.g., return a view in some cases and a redirect in others).</p>
    <pre><code>public ActionResult Index() {
    if (someCondition) {
        return View();  // Returns a view
    } else {
        return RedirectToAction("OtherAction");  // Returns a redirect
    }
}</code></pre>

    <h3>11. JavaScriptResult</h3>
    <p><strong>Definition:</strong> Returns JavaScript code that will be executed on the client-side.</p>
    <p><strong>Use Case:</strong> When you need to return and execute JavaScript from a server-side action (e.g., for updating the UI dynamically).</p>
    <pre><code>public ActionResult RunScript() {
    return JavaScript("alert('Hello World!');");
}</code></pre>

    <h3>12. ViewComponentResult (ASP.NET Core MVC)</h3>
    <p><strong>Definition:</strong> Returns a ViewComponent result, similar to a partial view but encapsulated within a reusable component.</p>
    <p><strong>Use Case:</strong> When you need to return a reusable UI component.</p>
    <pre><code>public IActionResult LoadComponent() {
    return ViewComponent("MyComponent");
}</code></pre>

    <h3>13. ChallengeResult (ASP.NET Core MVC)</h3>
    <p><strong>Definition:</strong> Triggers an authentication challenge.</p>
    <p><strong>Use Case:</strong> When you need to redirect unauthenticated users to a login page or other authentication mechanism.</p>
    <pre><code>public IActionResult Login() {
    return Challenge();
}</code></pre>

    <h3>14. BadRequestResult (ASP.NET Core MVC)</h3>
    <p><strong>Definition:</strong> Returns a 400 Bad Request response.</p>
    <p><strong>Use Case:</strong> When the client sends an invalid request, and you want to return a 400 error.</p>
    <pre><code>public IActionResult BadRequestExample() {
    return BadRequest("Invalid data.");
}</code></pre>

    <h3>15. OkResult and OkObjectResult (ASP.NET Core MVC)</h3>
    <p><strong>Definition:</strong> Returns an HTTP 200 OK response with or without a response body.</p>
    <p><strong>Use Case:</strong> When the request is successful, and you want to return an HTTP 200 response with optional data.</p>
    <pre><code>public IActionResult GetSuccessResponse() {
    var data = new { Message = "Success" };
    return Ok(data);
}</code></pre>

    <h3>Summary of Common Return Types</h3>
    <table>
        <thead>
            <tr>
                <th>Return Type</th>
                <th>Description</th>
                <th>Use Case</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ViewResult</td>
                <td>Returns an HTML view (.cshtml).</td>
                <td>Rendering web pages.</td>
            </tr>
            <tr>
                <td>JsonResult</td>
                <td>Returns JSON data.</td>
                <td>Sending JSON data to the client (AJAX).</td>
            </tr>
            <tr>
                <td>RedirectResult</td>
                <td>Redirects to a URL.</td>
                <td>Redirecting to an external or internal page.</td>
            </tr>
            <tr>
                <td>RedirectToRouteResult</td>
                <td>Redirects to an action within the app.</td>
                <td>Redirecting to a specific controller/action route.</td>
            </tr>
            <tr>
                <td>ContentResult</td>
                <td>Returns plain text or HTML.</td>
                <td>Returning raw data or custom HTML.</td>
            </tr>
            <tr>
                <td>FileResult</td>
                <td>Returns a file for download or viewing.</td>
                <td>Serving files like PDFs, images, etc.</td>
            </tr>
            <tr>
                <td>EmptyResult</td>
                <td>Returns nothing (empty response).</td>
                <td>When no data or view is required to be returned.</td>
            </tr>
            <tr>
                <td>HttpStatusCodeResult</td>
                <td>Returns an HTTP status code.</td>
                <td>Sending custom status codes like 404 or 500.</td>
            </tr>
            <tr>
                <td>PartialViewResult</td>
                <td>Returns a partial view (part of a page).</td>
                <td>Loading parts of a webpage via AJAX or within a full view.</td>
            </tr>
            <tr>
                <td>ActionResult</td>
                <td>Base type for all return types.</td>
                <td>Dynamic return types (e.g., view or redirect based on logic).</td>
            </tr>
            <tr>
                <td>JavaScriptResult</td>
                <td>Returns JavaScript code for execution.</td>
                <td>Returning and executing client-side JavaScript.</td>
            </tr>
        </tbody>
    </table>
</div>
      `,


      //ACTIONRESULT VIEWRESULT
    'general-actionresult-viewresult': `
    <div>
    <h2>ActionResult and ViewResult</h2>
    <p>In ASP.NET MVC, both ActionResult and ViewResult are commonly used return types for controller action methods. They serve different purposes and offer different levels of abstraction. Here’s a breakdown of each:</p>

    <h3>ActionResult</h3>
    <p><strong>Definition:</strong> ActionResult is a base class for various result types that an action method can return. It represents the result of an action method and provides a way to return different types of responses from a controller action.</p>

    <p><strong>Purpose:</strong> It is used when you want to return different types of results based on the application logic. This flexibility allows you to return views, JSON data, redirects, files, or other types of responses.</p>

    <p><strong>Flexibility:</strong> By using ActionResult, you can return any type derived from it, including ViewResult, JsonResult, RedirectResult, ContentResult, etc.</p>

    <p><strong>Example:</strong></p>
    <pre><code>
public ActionResult Index()
{
    if (someCondition)
    {
        return View();  // Returns a ViewResult
    }
    else
    {
        return RedirectToAction("AnotherAction");  // Returns a RedirectResult
    }
}
    </code></pre>

    <p><strong>Usage:</strong> Useful when you need to handle different response types from a single action method or when you want to implement conditional logic to decide the response type.</p>

    <h3>ViewResult</h3>
    <p><strong>Definition:</strong> ViewResult is a subclass of ActionResult that represents the result of rendering a view. It is used specifically for returning HTML content generated by a view (typically a .cshtml file).</p>

    <p><strong>Purpose:</strong> It is used when you want to render a view to the client. The view can be a full page or a partial view.</p>

    <p><strong>Features:</strong></p>
    <ul>
        <li>Automatically looks for a view file in the appropriate folder based on the action and controller names.</li>
        <li>Can be used with <code>View()</code> method to return the default view or with <code>View(string viewName)</code> to specify a particular view.</li>
    </ul>

    <p><strong>Example:</strong></p>
    <pre><code>
public ActionResult Index()
{
    return View();  // Returns the default view for the Index action
}

public ActionResult About()
{
    return View("AboutUs");  // Returns the view named "AboutUs"
}
    </code></pre>

    <p><strong>Usage:</strong> Specifically used when you need to return a view to the client, typically for rendering the user interface.</p>

    <h3>Comparison</h3>
    <table>
        <thead>
            <tr>
                <th>Aspect</th>
                <th>ActionResult</th>
                <th>ViewResult</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Definition</td>
                <td>Base class for various result types.</td>
                <td>A specific type of ActionResult for rendering views.</td>
            </tr>
            <tr>
                <td>Purpose</td>
                <td>Provides flexibility to return different types of results.</td>
                <td>Used to render HTML content from a view.</td>
            </tr>
            <tr>
                <td>Return Types</td>
                <td>Can return ViewResult, JsonResult, RedirectResult, etc.</td>
                <td>Returns a view to be rendered as HTML.</td>
            </tr>
            <tr>
                <td>Use Case</td>
                <td>When you need to handle multiple response types based on logic.</td>
                <td>When the response is specifically an HTML view.</td>
            </tr>
            <tr>
                <td>Typical Usage</td>
                <td><code>return View(), return RedirectToAction("Action"), return Json(data)</code>, etc.</td>
                <td><code>return View(), return View("ViewName")</code></td>
            </tr>
        </tbody>
    </table>

    <h3>Example Scenarios</h3>

    <p><strong>Using ActionResult for Conditional Responses:</strong></p>
    <pre><code>
public ActionResult GetResult(bool returnJson)
{
    if (returnJson)
    {
        var data = new { Name = "Zeeshan", Age = 30 };
        return Json(data, JsonRequestBehavior.AllowGet);  // Returns JSON data
    }
    else
    {
        return View();  // Returns the default view
    }
}
    </code></pre>

    <p><strong>Using ViewResult to Return a View:</strong></p>
    <pre><code>
public ActionResult Contact()
{
    var model = new ContactModel { Name = "John Doe", Email = "john.doe@example.com" };
    return View(model);  // Returns the view with the model data
}
    </code></pre>

    <p>In summary, ActionResult provides a flexible way to return various types of responses from a controller action, while ViewResult is specifically for rendering views. Using ActionResult allows for more dynamic responses, while ViewResult is used when you specifically need to return a view to the client.</p>
</div>

    `
  };
  
  function showContent(topic) {
    const contentDiv = document.getElementById('topic-content');
    contentDiv.innerHTML = content[topic] || '<p>Select a topic to view its description.</p>';
  }


  
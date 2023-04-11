using BlazorTodoCustomElement.Client;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Diagnostics.Metrics;
using BlazorTodoCustomElement.Client.CustomElement;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
//builder.RootComponents.RegisterCustomElement<TodoCustomElement>("blazor-todo");

builder.Services.AddHttpClient("BlazorTodoCustomElement.ServerAPI", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress));

// Supply HttpClient instances that include access tokens when making requests to the server project
builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("BlazorTodoCustomElement.ServerAPI"));

await builder.Build().RunAsync();

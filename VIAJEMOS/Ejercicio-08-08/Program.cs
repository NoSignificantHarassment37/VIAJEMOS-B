using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();

app.MapControllers();

app.Run();

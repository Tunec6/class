using System.Diagnostics;

foreach(Process process in Process.GetProcesses())
{
    System.Console.WriteLine($"ID: {process.Id} Name: {process.ProcessName}");
}
public class Monitor{
    string monitors;
    string resolution;

    public Monitor(string monitors, string resolution){
        this.monitors = monitors;
        this.resolution = resolution; 
    }

    public void Monitors(){
        System.Console.WriteLine("Название монитора:" + monitors);
        System.Console.WriteLine("Разрешение монитора:" + resolution);
    }

}

public class Prog{
    public static void Main(string[] args){
        Monitor monitor1 = new Monitor("Asus rog", "1920x1080");
        Monitor monitor2 = new Monitor("Samsung", "2460x1920");

        monitor1.Monitors();
        monitor2.Monitors();
    } 
}
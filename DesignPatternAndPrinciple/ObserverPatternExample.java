import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String stockName, double price);
}

interface Stock {
    void registerObserver(Observer o);
    void deregisterObserver(Observer o);
    void notifyObservers();
}

class StockMarket implements Stock {
    private List<Observer> observers = new ArrayList<>();
    private String stockName;
    private double price;

    public StockMarket(String stockName, double price) {
        this.stockName = stockName;
        this.price = price;
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void deregisterObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(stockName, price);
        }
    }
}

class MobileApp implements Observer {
    private String appName;

    public MobileApp(String appName) {
        this.appName = appName;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("[Mobile App - " + appName + "] Notification: " + stockName + " price changed to $" + price);
    }
}

class WebApp implements Observer {
    private String userName;

    public WebApp(String userName) {
        this.userName = userName;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("[Web Dashboard - " + userName + "] Update: " + stockName + " is now trading at $" + price);
    }
}

public class ObserverPatternExample {
    public static void main(String[] args) {
        StockMarket appleStock = new StockMarket("Apple (AAPL)", 150.00);

        Observer mobileUser = new MobileApp("Aditya's iPhone");
        Observer webDashboard = new WebApp("CorporateAdmin");

        appleStock.registerObserver(mobileUser);
        appleStock.registerObserver(webDashboard);

        appleStock.setPrice(152.50);

        appleStock.deregisterObserver(webDashboard);
        appleStock.setPrice(155.00);
    }
}
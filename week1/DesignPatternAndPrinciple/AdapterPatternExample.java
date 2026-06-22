interface PaymentProcessor { 
    void processPayment();
    void checkBalance();
    void upiPayment();
    void sendMoney();
}

class PaytmGateway {
    public void executePaytmTransaction() {
        System.out.println("Payment Completed using Paytm legacy system!");
    }
    public void fetchWalletBalance() {
        System.out.println("Checking balance via Paytm API.");
    }
}

class PhonePeSDK {
    public void makePhonePePayment() {
        System.out.println("Payment Completed using PhonePe SDK!");
    }
    public void verifyAccountBalance() {
        System.out.println("Verifying bank balance via PhonePe.");
    }
}

class PaytmAdapter implements PaymentProcessor {
    private PaytmGateway paytmSystem;

    public PaytmAdapter(PaytmGateway paytmSystem) {
        this.paytmSystem = paytmSystem;
    }

    @Override
    public void processPayment() {
        paytmSystem.executePaytmTransaction(); 
    }

    @Override
    public void checkBalance() {
        paytmSystem.fetchWalletBalance();
    }

    @Override
    public void upiPayment() {
        System.out.println("Paytm UPI simulated.");
    }

    @Override
    public void sendMoney() {
        System.out.println("Paytm Transfer simulated.");
    }
}

class PhonePeAdapter implements PaymentProcessor {
    private PhonePeSDK phonePeSystem;

    public PhonePeAdapter(PhonePeSDK phonePeSystem) {
        this.phonePeSystem = phonePeSystem;
    }

    @Override
    public void processPayment() {
        phonePeSystem.makePhonePePayment();
    }

    @Override
    public void checkBalance() {
        phonePeSystem.verifyAccountBalance();
    }

    @Override
    public void upiPayment() {
        System.out.println("PhonePe UPI simulated.");
    }

    @Override
    public void sendMoney() {
        System.out.println("PhonePe Transfer simulated.");
    }
}

public class AdapterPatternExample {
    public static void main(String[] args) {
        PaytmGateway paytmGateway = new PaytmGateway();
        PaymentProcessor paytmProcessor = new PaytmAdapter(paytmGateway);

        PhonePeSDK phonePeSDK = new PhonePeSDK();
        PaymentProcessor phonePeProcessor = new PhonePeAdapter(phonePeSDK);

        paytmProcessor.processPayment();
        paytmProcessor.checkBalance();

        phonePeProcessor.processPayment();
        phonePeProcessor.checkBalance();
    }
}
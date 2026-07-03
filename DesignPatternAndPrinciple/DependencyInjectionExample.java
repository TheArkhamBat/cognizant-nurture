interface CustomerRepository {
    String findCustomerById(String id);
}

class CustomerRepositoryImpl implements CustomerRepository {
    @Override
    public String findCustomerById(String id) {
        if ("101".equals(id)) {
            return "Aditya";
        }
        return "Customer Not Found";
    }
}

class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void displayCustomerDetails(String id) {
        String customerName = customerRepository.findCustomerById(id);
        System.out.println("Customer Details for ID " + id + ": " + customerName);
    }
}

public class DependencyInjectionExample {
    public static void main(String[] args) {
        CustomerRepository repository = new CustomerRepositoryImpl();

        CustomerService service = new CustomerService(repository);

        service.displayCustomerDetails("101");
        service.displayCustomerDetails("102");
    }
}
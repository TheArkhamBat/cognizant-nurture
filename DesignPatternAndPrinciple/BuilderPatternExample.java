class Computer {
    String CPU ;
    int RAM;
    int Storage;

    private Computer(Builder builder){
        this.CPU = builder.CPU ;
        this.RAM = builder.RAM ;
        this.Storage = builder.Storage;
    }

    public static class Builder {
        private String CPU ;
        private int RAM;
        private int Storage;

        public Builder setCPU(String CPU){
            this.CPU = CPU ;
            return this ;
        }
        public Builder setRAM(int RAM){
            this.RAM = RAM ;
            return this ;
        }
        public Builder setStorage (int Storage){
            this.Storage = Storage ;
            return this ; 
        }
        public Computer build(){
            return new Computer(this);
        }
    }
}
public class BuilderPatternExample { 
    public static void main(String [] args){
        Computer c1 = new Computer.Builder() 
            .setCPU("Intel")
            .setRAM(16)
            .setStorage(500)
            .build();
        Computer c2 = new Computer.Builder() 
            .setCPU("AMD")
            .setRAM(8)
            .setStorage(250)
            .build();
        System.out.println("Computer c1 "+c1.CPU);
        System.out.println("Computer c2 "+c2.CPU);
    }
}


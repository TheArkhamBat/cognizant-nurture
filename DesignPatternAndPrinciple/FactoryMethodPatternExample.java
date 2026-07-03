abstract class WordDocument {
    abstract void saveWordDocument();
}

abstract class PdfDocument {
    abstract void savePdfDocument();
}

abstract class ExcelDocument {
    abstract void saveExcelDocument();
}

class word extends WordDocument { 
    public void saveWordDocument(){
        System.out.println("Saving the word document !");
    }
}

class pdf extends PdfDocument {
    public void savePdfDocument() {
        System.out.println("Saving PDF !");
    }
}

class excel extends ExcelDocument {
    public void saveExcelDocument() {
        System.out.println("Saving excel sheet !");
    }
}

abstract class DocumentFactory { 
    abstract void createDocument();
}

class WordFactory extends DocumentFactory {
    public void createDocument() { 
        System.out.println("Word Document Created !");
    }
}

class PdfFactory extends DocumentFactory {
    public void createDocument() {
        System.out.println("PDF document created ! ");
    }
}

class ExcelFactory extends DocumentFactory {
    public void createDocument() {
        System.out.println("Excel document created ! ");
    }
}

public class FactoryMethodPatternExample { 
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        wordFactory.createDocument();

        DocumentFactory pdfFactory = new PdfFactory();
        pdfFactory.createDocument();

        DocumentFactory excelFactory = new ExcelFactory();
        excelFactory.createDocument();

        word myWord = new word();
        myWord.saveWordDocument();

        pdf myPdf = new pdf();
        myPdf.savePdfDocument();

        excel myExcel = new excel();
        myExcel.saveExcelDocument();
    }
}
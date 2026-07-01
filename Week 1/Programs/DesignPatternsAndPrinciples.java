public class DesignPatternsAndPrinciples {

    public static void main(String[] args) {

        // 1. Single Responsibility Principle
        System.out.println("----- Single Responsibility Principle -----");
        Student student = new Student("Ashreen", 101);
        StudentPrinter printer = new StudentPrinter();
        printer.printStudent(student);

        // 2. Open Closed Principle
        System.out.println("\n----- Open Closed Principle -----");
        Shape rectangle = new Rectangle(10, 5);
        Shape circle = new Circle(7);

        System.out.println("Rectangle Area: " + rectangle.calculateArea());
        System.out.println("Circle Area: " + circle.calculateArea());

        // 3. Singleton Pattern
        System.out.println("\n----- Singleton Pattern -----");
        Database db1 = Database.getInstance();
        Database db2 = Database.getInstance();

        db1.showMessage();
        System.out.println("Same Object: " + (db1 == db2));

        // 4. Factory Pattern
        System.out.println("\n----- Factory Pattern -----");
        Animal dog = AnimalFactory.getAnimal("Dog");
        Animal cat = AnimalFactory.getAnimal("Cat");

        dog.sound();
        cat.sound();

        // 5. Strategy Pattern
        System.out.println("\n----- Strategy Pattern -----");
        Payment payment = new Payment();

        payment.setPaymentStrategy(new CreditCardPayment());
        payment.pay(2000);

        payment.setPaymentStrategy(new UpiPayment());
        payment.pay(1500);
    }
}

// ======================================================
// 1. SINGLE RESPONSIBILITY PRINCIPLE
// ======================================================

class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}

class StudentPrinter {

    void printStudent(Student student) {
        System.out.println("Student Name: " + student.name);
        System.out.println("Roll No: " + student.rollNo);
    }
}

// ======================================================
// 2. OPEN CLOSED PRINCIPLE
// ======================================================

interface Shape {
    double calculateArea();
}

class Rectangle implements Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double calculateArea() {
        return length * width;
    }
}

class Circle implements Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return 3.14 * radius * radius;
    }
}

// ======================================================
// 3. SINGLETON PATTERN
// ======================================================

class Database {

    private static Database instance;

    private Database() {
    }

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }

    void showMessage() {
        System.out.println("Database Connected Successfully.");
    }
}

// ======================================================
// 4. FACTORY PATTERN
// ======================================================

interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog says: Bow Bow");
    }
}

class Cat implements Animal {
    public void sound() {
        System.out.println("Cat says: Meow");
    }
}

class AnimalFactory {

    public static Animal getAnimal(String animalType) {

        if (animalType.equalsIgnoreCase("Dog")) {
            return new Dog();
        } else if (animalType.equalsIgnoreCase("Cat")) {
            return new Cat();
        }

        return null;
    }
}

// ======================================================
// 5. STRATEGY PATTERN
// ======================================================

interface PaymentStrategy {
    void pay(int amount);
}

class CreditCardPayment implements PaymentStrategy {

    public void pay(int amount) {
        System.out.println("Paid Rs." + amount + " using Credit Card.");
    }
}

class UpiPayment implements PaymentStrategy {

    public void pay(int amount) {
        System.out.println("Paid Rs." + amount + " using UPI.");
    }
}

class Payment {

    private PaymentStrategy paymentStrategy;

    void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    void pay(int amount) {
        paymentStrategy.pay(amount);
    }
}
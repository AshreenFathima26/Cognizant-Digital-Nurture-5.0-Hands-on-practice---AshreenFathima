package com.cognizant;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    void testAdd() {
        assertEquals(15, calculator.add(10, 5));
    }

    @Test
    void testSubtract() {
        assertEquals(5, calculator.subtract(10, 5));
    }

    @Test
    void testMultiply() {
        assertEquals(50, calculator.multiply(10, 5));
    }

    @Test
    void testDivide() {
        assertEquals(2, calculator.divide(10, 5));
    }
}

package com.loan.loan.controller;

import com.loan.loan.model.Loan;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {
        return new Loan(number, "Home Loan", 500000);
    }
}

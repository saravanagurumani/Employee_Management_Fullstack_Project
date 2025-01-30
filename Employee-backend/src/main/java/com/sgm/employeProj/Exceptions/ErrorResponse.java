package com.sgm.employeProj.Exceptions;

import org.springframework.http.HttpStatus;

public class ErrorResponse {

    private final String errormessage;


    public ErrorResponse(String errormessage) {
        this.errormessage = errormessage;
    }

    public String getErrormessage() {
        return errormessage;
    }
}

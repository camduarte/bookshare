
package com.hackatong7.server.domain.exceptions;


public class UnauthorizedException extends RuntimeException {
    
    public UnauthorizedException(String message) {
        super(message);
    }
    
}

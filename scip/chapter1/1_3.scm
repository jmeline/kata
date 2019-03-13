; Exercise 1.3
; Define a procedure that takes three numbers as arguments and return the sum of the squares of the two larger numbers
(define (square x) (* x x))
(define (sum_squares_two_numbers a b c)
  (+ (square(max(a b))) (square(max(b c)))))

(print (sum_squares_two_numbers 3 4 5))

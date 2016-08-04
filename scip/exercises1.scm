; Exercise 1.1
10                  ; 10
(+ 5 4 3)           ; 10
(- 9 1)             ; 8
(/ 6 2)             ; 3
(+ (* 2 4) (- 4 6)) ; 6
(define a 3)
(define b (+ a 1))  ; b = 4
(+ a b (* a b))     ; 3 + 4 + 12 = 19
(= a b)             ; a != b => 3 != 4 => false
(if (and (> b a) (< b (* a b))) ; true, b = 4
    b
    a)
(cond ((= a 4) 6)         ; false
      ((= b 4) (+ 6 7 a)) ; true, 16
      (else 25))
(+ 2 (if (> b a) b a))    ; 6
(* (cond ((> a b) a)      ; false
         ((< a b) b)      ; true, (* 4 (+ 3 1)) = 16
         (else -1))
   (+ a 1))

; Exercise 1.2
(/ (+ 5 (/ 1 2) (+ 2 -3 (- 6 (/ 1 3)))) (* 3 (- 6 2) (- 2 7)))

; Exercise 1.3
; Define a procedure that takes three numbers as arguments and return the sum of the squares of the two larger numbers
(define (max a b) (if (> a b) a b))
(define (square x) (* x x))
(define (sum_squares_two_numbers a b c)
  (+ (square(max(a b))) (square(max(b c))))
  )

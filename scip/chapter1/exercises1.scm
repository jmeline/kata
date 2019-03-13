; Exercise 1.2
(/ (+ 5 (/ 1 2) (+ 2 -3 (- 6 (/ 1 3)))) (* 3 (- 6 2) (- 2 7)))


; Exercise 1.4
; Observe that our model of evaluation allows for combinations whose operators are compound expressions. Use this observation to describe the behavior of the following procedure:
(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

(a-plus-abs-b 1 2) ;; => (+ 1 2) => 3
(a-plus-abs-b -1 -2) ;; => (- (- 1) (- 2)) => -1

; Exercise 1.5
; Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He defines the following two procedures:
(define (p) (p))
(define (test x y)(if (= x 0) 0 y))
;Then he evaluates the expression

;; => (test 0 (p)) Results in an infinite loop because (p) continously executes p which then executes p again. test with arg 0 won't ever execute


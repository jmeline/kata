;; Exercise 1.2 Translate the following expression into prefix form

(define top (+ 5
               4
               (- 2 (- 3 (+ 6 (/ 4 5))))))

(define bottom (* 3
                  (- 6 2)
                  (- 2 7)))

(define result (/ top bottom))

(print "top: " top  ", bottom: " bottom ", result: " result)

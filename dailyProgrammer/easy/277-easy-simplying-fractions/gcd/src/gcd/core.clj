(ns gcd.core
  (:gen-class))

(defn gcd-recursive
  [a b]
  (println "a:" a ", b:" b)
  (if (= b 0)
    a
    (gcd-recursive b (mod a b))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!" (gcd-recursive 6 35)))


#include <iostream>
#include <cstdlib>

int fib(int n)
{
	if (n == 0) return 0;
	if (n == 1) return 1;
	return fib(n-2) + fib(n-1);
}

int main (int argc, char ** argv){
	if (argc > 1){
		int n = atoi(argv[1]);
		std::cout << "Fib(" << n << "): " << fib(n)<< std::endl;	
	}	
	return 0;
}

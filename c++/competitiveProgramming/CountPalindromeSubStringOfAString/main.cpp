#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isPalindrome(std::string str) {
    int length = str.length();
    for (int i = 0; i < length; i++) {
        if (str[i] != str[length - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
	int T, N;
  std::string currentString;

  std::cout << "Enter the number of tests: ";
	std::cin >> T;
	for (int i = 0; i < T; i++) {
      std::cout << "Enter text length for test(" << i << "): ";
	    std::cin >> N;
      std::cout << "Enter text(" << i << "): ";
	    std::cin >> currentString;
	    std::vector<std::string> palindromes;

	    std::cout << "CurrentString: " << currentString << std::endl;
	    for (int i = 0; i < N; i++)
	    {
	        for (int j = 2; j <= currentString.substr(i).length(); j++)
	        {
	            string splicedString = currentString.substr(i, j);
	            std::cout << "splicedString: " << splicedString << "(" << i << "," << j << ")" << " ";
	            if (isPalindrome(splicedString))
	            {
                  std::cout << "\u2713";
	                palindromes.push_back(splicedString);
	            }
	            std::cout << std::endl;
	        }
	    }
      std::string max = palindromes[0],
                  min = palindromes[0];

	    for (int i = 0; i < palindromes.size(); i++)
	    {
        std::string currentPalindrome = palindromes[i];
        int currentLength = currentPalindrome.length();
        if (max.length() < currentLength) max = currentPalindrome;
        if (min.length() > currentLength) min = currentPalindrome;
	    }

	    std::cout << "Palindromes: ";
      for (int i = 0; i < palindromes.size(); i++) {
        std::cout << palindromes[i] << " ";
      }
	    std::cout << std::endl;
      std::cout << "Max: " << max << std::endl;
      std::cout << "Min: " << min << std::endl;

	}

	return 0;
}

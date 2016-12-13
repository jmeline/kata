#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isPalindrome(std::string str) {
    for (int i = 0; i < str.length(); i++) {
        if (str[i] != str[str.length() - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
	int T, N;

	std::cin >> T;
	for (int i = 0; i < T; i++) {
	    std::cin >> N;
	    std::string currentString;
	    std::cin >> currentString;
	    std::vector<std::string> palindromes;

	    std::cout << "CurrentString: " << currentString << std::endl;
	    for (int i = 0; i < currentString.length(); i++)
	    {
	        for (int j = i; j < currentString.length(); j++)
	        {
	            string splicedString = currentString.substr(i, j);
	            std::cout << "splicedString: " << splicedString << " ";
	            if (isPalindrome(splicedString))
	            {
	                palindromes.push_back(splicedString);
	            }
	            std::cout << std::endl;
	        }
	    }
	    std::cout << "Palindromes: ";
	    for (int i = 0; i < palindromes.size(); i++)
	    {
	        string c = palindromes[i];
	        if (c.length() >= 2) {
	            std::cout << palindromes[i] << " ";
	        }
	    }
	    std::cout << std::endl;
	}

	return 0;
}

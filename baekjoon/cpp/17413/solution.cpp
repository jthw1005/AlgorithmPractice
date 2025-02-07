#include <iostream>
#include <stack>
using namespace std;

void processString(const string& str) {
    stack<char> stk;
    bool inTag = false; 

    for (size_t i = 0; i < str.size(); ++i) {
        char ch = str[i];

        if (ch == '<') { 
            
            while (!stk.empty()) {
                cout << stk.top();
                stk.pop();
            }
            inTag = true;
            cout << ch;
        }
        else if (ch == '>') { 
            inTag = false;
            cout << ch;
        }
        else if (inTag) { 
            cout << ch;
        }
        else { 
            if (ch == ' ') { 
                while (!stk.empty()) {
                    cout << stk.top();
                    stk.pop();
                }
                cout << ' ';
            }
            else { 
                stk.push(ch);
            }
        }
    }

    
    while (!stk.empty()) {
        cout << stk.top();
        stk.pop();
    }
}

int main() {
    string input;
    getline(cin, input); 
    processString(input);
    return 0;
}

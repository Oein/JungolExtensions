#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int n , m , min_ = 0 , max_ = 1000000000 , inputi;
    string x = "";
    cin >> n >> m;
    cin.ignore();
    for(int i = 0;i < n; i++){
        cin >> x >> inputi;
        cin.ignore();
        getline(cin, x);
        min_ = max(min_ , inputi);
    }
    
    for(int i = 0;i < m; i++){
        cin >> x >> inputi;
        cin.ignore();
        getline(cin, x);
        max_ = min(max_ , inputi);
    }
    
    for(int i = max_ - 1;i > min_;i--) cout << i << " ";
}
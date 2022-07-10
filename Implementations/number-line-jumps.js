
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if( x1 > x2 && v1 >= v2) {
        return ("NO");
    }
    if ( x1 > x2 && v1 < v2) {
        for ( let i = 1 ; i < 10000 ; i++ ) {
            
            if ( x1 + (v1*i) == x2 + (v2*i)) {
                return ("YES");
            }
            if ( x1 + (v1*i) < x2 + (v2*i)) {
                return ("NO");
            }
        }
        
    }
    if ( x1 < x2 && v1 > v2) {
        for ( let i = 1 ; i < 10000 ; i++ ) {
            if ( x1 + (v1*i) == x2 + (v2*i)) {
                return ("YES");
            }
            if ( x1 + (v1*i) > x2 + (v2*i)) {
                return ("NO");
            }
        }
    }
    if ( x1 < x2 && v1 <= v2) {
        return ("NO");
    }
    if( x1 == x2 && v1 > v2) {
        return ("NO");
    }
    if ( x1 == x2 && v1 < v2) {
        return ("NO");
    }
    if ( x1 == x2 && v1 == v2) {
        return ("YES");
    }
}

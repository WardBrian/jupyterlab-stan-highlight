// test
data {
    "test string"

    int<lower=0> test;
    real<offset=10> test2;
    3.1
    3.1e-4.10 
}

/**
 dummy doc comment
  @return something 
*/

transformed parameters {
    {
        real x;
    }
    int x = 3;
    print("hello");
    
    real badint += log(10);
    
    if (3 % 1 == 0 && 1) {
       //code
    }
    for (intdentifer in collection) {
       /* code */
    }
    while (/* condition */) {
       /* code */
    }
 
    // deprecated/illegal variable
    int illegal__ <- get_lp();
    // reserved
    auto;
    functions = 10;
}

model {
    
    test ~ exponential(1,2); 

    for (n in 1:N)
        y[n] ~ normal(mu, sigma) T[,U];
}

generated quantities {
    vector[N] out = bernoulli_rng(6,0.5)
}
# Homework-03

Here is a detailed description of the algorithm.

First, we generate a regular expression that corresponds to which sets of characters
the user wants to include in the password.  They should use all in order to maximize
the size of th keyspace, but I digress.

Second, we generate a random non whitespace ASCII character and check if it matches
our regex pattern.  If it does it is appended to the password string else it's discarded.

Third, we repeat step two until our password string reaches the given length.

Fourth, we check that the resulting password string is valid i.e. it contains at least
one character from each set chosen by the user.  I suspect the odds of generating an
invalid password this way are really low, but better safe than sorry.

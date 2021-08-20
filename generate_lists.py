"""
This file generates lists of deprecated keywords, functions, 
and distributions from stan_lang.json generated 
[here](https://github.com/jrnold/stan-language-definitions)
"""
import json

def kw2re(x):
    """Convert a list of keywords to a regex."""
    return r'(%s)' % '|'.join(sorted(list(set(x))))


def patterns(filename):
    """Print patterns."""
    with open(filename, "r") as f:
        data = json.load(f)

    functions = [
        k for k, v in data['functions'].items()
        if not k.startswith('operator') and not v['deprecated']
        and not v['keyword']
    ]
    deprecated_functions = data['deprecated']
    distributions = [
        v['sampling'] for k, v in data['functions'].items() if v['sampling']
    ]

    print("functions: \n" + r"/\b" +kw2re(functions) + r"\b/")
    print()
    print("distributions: \n" + r"/(~)(\s*)" + kw2re(distributions)
          + r"(\b)/")
    print()
    print("deprecated_functions: \n" + r"/\b" +
          kw2re(deprecated_functions) + r"\b/")
    print()


if __name__ == "__main__":
    patterns('data/stan_lang.json')
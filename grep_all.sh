#!/bin/bash

grep -R -B 2 -A 2 -i -e "$*" content | more

#!/bin/bash

if [ -z $1 ]; then
  truffle run verify OniFactory --network bsctestnet
else
  if [ -z $2 ]; then
    truffle run verify $1 --network bsc
  else
    if [[ $1 = "all" ]]; then
      truffle run verify OniFactory --network $2
    else
      truffle run verify $1 --network $2
    fi
  fi
fi

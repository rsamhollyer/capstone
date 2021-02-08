#!/bin/bash

for f in *.json
do
	node importflights.js ./$f
done


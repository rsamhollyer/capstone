#!/bin/bash

for f in *.json
do
	node importRecipe.js ./$f
done


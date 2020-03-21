#!/bin/bash
aws s3 sync ./build/ s3://www.coronavirus-death-rate.info/

#!/bin/bash
DIR="/home/sensei/sensei/sensei-server/bin"

DAY_STARTS=$1
NIGHT_STARTS=$2

FAN_FREQ=$3
FAN_SECS=$4

PUMP_CYCLES=$5
PUMP_SECS=$6

TMP_FILE="/tmp/crontab.tmp"

crontab -l > $TMP_FILE

sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# DAY\/NIGHT\n[0-9]\+\s\)\([0-9]\+\)\(\s\+.*\)/\1$DAY_STARTS\3/gi" $TMP_FILE -i
sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# DAY\/NIGHT\n[^\n]\+\n[0-9]\+\s\)\([0-9]\+\)\(\s\+.*\)/\1$NIGHT_STARTS\3/gi" $TMP_FILE -i

sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# LIGHTS\n[0-9]\+\s\)\([0-9]\+\)\(\s\+.*\)/\1$DAY_STARTS\3/gi" $TMP_FILE -i
sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# LIGHTS\n[^\n]\+\n[0-9]\+\s\)\([0-9]\+\)\(\s\+.*\)/\1$NIGHT_STARTS\3/gi" $TMP_FILE -i

sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# FANS\n\*\/\)\([0-9]\+\)\(\s\+.*\)/\1$FAN_FREQ\3/gi" $TMP_FILE -i
sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# FANS\n[^\n]*\)\(sleep [0-9]\+\)\([^\n]*\)\(sleep [0-9]\+\)\([^\n]*\)\(sleep [0-9]\+\)\([^\n]*\)\(\s\+.*\)/\1sleep $FAN_SECS\3sleep 5\5sleep $FAN_SECS\7\8/gi" $TMP_FILE -i

sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# PUMP\n0 0-\)\([0-9]\+\)\(\s\+.*\)/\1$PUMP_CYCLES\3/gi" $TMP_FILE -i
sed -e ':a' -e 'N' -e '$!ba' -e "s/\(.*# PUMP\n[^\n]*\)\(sleep [0-9]\+\)\([^\n]*\)/\1sleep $PUMP_SECS\3/gi" $TMP_FILE -i

cat $TMP_FILE | crontab -
cat $TMP_FILE
rm $TMP_FILE

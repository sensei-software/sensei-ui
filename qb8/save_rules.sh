#!/bin/bash
DIR="/home/sensei/sensei/sensei-server/bin"

LIGHT_DAY=$1
LIGHT_NIGHT=$2

HUMIDITY_DAY=$3
HUMIDITY_NIGHT=$4

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$LIGHT_DAY\"/gi" /home/sensei/sensei/sensei-server/conf/rules/check-light.day.* -i

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$LIGHT_NIGHT\"/gi" /home/sensei/sensei/sensei-server/conf/rules/check-light.night.* -i

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$HUMIDITY_DAY\"/gi" /home/sensei/sensei/sensei-server/conf/rules/check-humidity.day.* -i

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$HUMIDITY_NIGHT\"/gi" /home/sensei/sensei/sensei-server/conf/rules/check-humidity.night.* -i

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$HUMIDITY_DAY\"/gi" /home/sensei/sensei/sensei-server/conf/rules/mantain-humidity.day.* -i

sed "s/\(THRESHOLD=\"\)\([0-9]\+\)\"/\1$HUMIDITY_NIGHT\"/gi" /home/sensei/sensei/sensei-server/conf/rules/mantain-humidity.night.* -i

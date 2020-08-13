#!/bin/bash

TARGETDIR=20200813_export_test

echo 'start time' >> /backup_nfs/work/$TARGETDIR/timestamp.txt
date >> /backup_nfs/work/$TARGETDIR/timestamp.txt

/usr/sap/PD3/HDB02/exe/hdbsql -U PIOAPKEY -I /backup_nfs/work/$TARGETDIR/export.sql -o /backup_nfs/work/$TARGETDIR/CONSULT_HISTORY_INFO.csv

echo 'end time' >> /backup_nfs/work/$TARGETDIR/timestamp.txt
date >> /backup_nfs/work/$TARGETDIR/timestamp.txt


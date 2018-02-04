package com.adventofcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.*;

public class Main {

    public static void main(String[] args) {
        int[] banks = {14,	0,	15,	12,	11,	11,	3,	5,	1,	6,	8,	4,	9,	1,	8,	4};

        int count = 0;

        int[][] states = new int[50000000][];
        System.out.println("banks[0] " + banks[0]);
        do {
            redistribute(banks);
            System.out.println("banks[0] " + banks[0]);
            trackStates(states, banks, count);
            count++;
        } while (!compareStates(states, banks));
    }


    public static int[] redistribute(int[] banks) {

        int maxToDistribute = getMax(banks);
        int index = getMaxIndex(banks);
        banks[index] = 0;
        int i = index + 1;
        while(maxToDistribute>0){
            if(i==banks.length-1){
                i = 0;
            }
            banks[i] = banks[i] + 1;
            maxToDistribute -= 1;
            i++;
        }
        return banks;
    }

    public static boolean compareStates(int[][] states, int[] banks) {
        boolean isSame = false;
        for(int i=0; i<states.length; i++){
            if(states[i].equals(banks)){
                isSame = true;
                break;
            }
        }
        System.out.println("isSame: " + isSame);
        return isSame;
    }

    public static int[][] trackStates(int[][] states, int[] banks, int count) {
        states[count] = banks;
        return states;
    }

    public static int getMax (int[] banks) {
        return Arrays.stream(banks).max().getAsInt();
    }

    public static int getMaxIndex(int[]banks){
        return IntStream.range(0, banks.length)
                .filter(i -> getMax(banks)==(banks[i]))
                .findFirst().getAsInt();
    }

}

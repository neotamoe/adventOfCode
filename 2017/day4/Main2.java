package com.company;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        int countValid = 0;
        Scanner input = new Scanner(new File("day4.txt"));
        while(input.hasNext()){
            String answer = input.nextLine();
            System.out.println("answer: " + answer);
            if(checkPassphrase(answer)){
                countValid++;
                System.out.println("countValid: " + countValid );
            }
        }
    }

    public static boolean checkPassphrase(String answer) {

        boolean valid = false;
        int doubles = 0;
        String[] passphraseSplit = answer.split(" ");
        for(int i=0; i<passphraseSplit.length; i++){
            for (int k=0; k<passphraseSplit.length; k++) {
                if(i!=k && checkEachWord(passphraseSplit[i],passphraseSplit[k])){
                    doubles++;
                }
            }
        }
        System.out.println("doubles outside of for loops: " + doubles);

        if(doubles==0 ){
            valid = true;
        }
        return valid;
    }

    public static boolean checkEachWord(String word1, String word2){
        char[] chars1 = word1.toCharArray();
        char[] chars2 = word2.toCharArray();
        Arrays.sort(chars1);
        Arrays.sort(chars2);

        return Arrays.equals(chars1, chars2);
    }

}

package com.adventofcode;


import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner inFile1 = null;
        int i=0;
        int next = 0;
        try
        {
            inFile1 = new Scanner(new File("/Users/neotamoe/Documents/adventOfCode/2017/day5/jumps"));
            System.out.println("File jumps has been opened.");
        }
        catch (FileNotFoundException fnfe)
        {
            System.out.println("File jumps was not found!");
        }

        List<Integer> temps = new ArrayList<Integer>();

        // while loop
        while (inFile1.hasNext()) {
            next = Integer.parseInt(inFile1.next());
            temps.add(i, next);
            i++;
        }

        jump(temps);

    }

    public static int jump (List<Integer> jumpsList) {
        int jumpLength = 0;
        int index = 0;
        int count = 0;
        System.out.println("in jump method");
        while(index<jumpsList.size()){
            System.out.println("index start of loop: " + index);
            System.out.println("count start of loop: " + count);
            System.out.println("jumpLength start of loop: " + jumpLength);
            jumpLength = jumpsList.get(index);
            jumpsList.set(index, jumpLength+1);
            index += jumpLength;
            count++;
            System.out.println("index end of loop: " + index);
            System.out.println("jumpLength end of loop: " + jumpLength);
        }
        System.out.println("count: " + count);
        return count;
    }

}

// ANSWER: 355965
//--- Day 5: A Maze of Twisty Trampolines, All Alike ---
//        An urgent interrupt arrives from the CPU: it's trapped in a maze of jump instructions, and it would like assistance from any programs with spare cycles to help find the exit.
//
//        The message includes a list of the offsets for each jump. Jumps are relative: -1 moves to the previous instruction, and 2 skips the next one. Start at the first instruction in the list. The goal is to follow the jumps until one leads outside the list.
//
//        In addition, these instructions are a little strange; after each jump, the offset of that instruction increases by 1. So, if you come across an offset of 3, you would move three instructions forward, but change it to a 4 for the next time it is encountered.
//
//        For example, consider the following list of jump offsets:
//
//        0
//        3
//        0
//        1
//        -3
//        Positive jumps ("forward") move downward; negative jumps move upward. For legibility in this example, these offset values will be written all on one line, with the current instruction marked in parentheses. The following steps would be taken before an exit is found:
//
//        (0) 3  0  1  -3  - before we have taken any steps.
//        (1) 3  0  1  -3  - jump with offset 0 (that is, don't jump at all). Fortunately, the instruction is then incremented to 1.
//        2 (3) 0  1  -3  - step forward because of the instruction we just modified. The first instruction is incremented again, now to 2.
//        2  4  0  1 (-3) - jump all the way to the end; leave a 4 behind.
//        2 (4) 0  1  -2  - go back to where we just were; increment -3 to -2.
//        2  5  0  1  -2  - jump 4 steps forward, escaping the maze.
//        In this example, the exit is reached in 5 steps.
//
//        How many steps does it take to reach the exit?
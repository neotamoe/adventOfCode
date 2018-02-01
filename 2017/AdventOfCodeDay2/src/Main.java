import java.util.Arrays;
import java.util.stream.*;

public class Main {

    public static void main(String[] args) {
        String row1="1364	461	1438	1456	818	999	105	1065	314	99	1353	148	837	590	404	123";

        String row2="204	99	235	2281	2848	3307	1447	3848	3681	963	3525	525	288	278	3059	821";
        String row3="280	311	100	287	265	383	204	380	90	377	398	99	194	297	399	87";
        String row4="7698	2334	7693	218	7344	3887	3423	7287	7700	2447	7412	6147	231	1066	248	208";
        String row5="3740	837	4144	123	155	2494	1706	4150	183	4198	1221	4061	95	148	3460	550";
        String row6="1376	1462	73	968	95	1721	544	982	829	1868	1683	618	82	1660	83	1778";
        String row7="197	2295	5475	2886	2646	186	5925	237	3034	5897	1477	196	1778	3496	5041	3314";
        String row8="179	2949	3197	2745	1341	3128	1580	184	1026	147	2692	212	2487	2947	3547	1120";
        String row9="460	73	52	373	41	133	671	61	634	62	715	644	182	524	648	320";
        String row10="169	207	5529	4820	248	6210	255	6342	4366	5775	5472	3954	3791	1311	7074	5729";
        String row11="5965	7445	2317	196	1886	3638	266	6068	6179	6333	229	230	1791	6900	3108	5827";
        String row12="212	249	226	129	196	245	187	332	111	126	184	99	276	93	222	56";
        String row13="51	592	426	66	594	406	577	25	265	578	522	57	547	65	564	622";
        String row14="215	2092	1603	1001	940	2054	245	2685	206	1043	2808	208	194	2339	2028	2580";
        String row15="378	171	155	1100	184	937	792	1436	1734	179	1611	1349	647	1778	1723	1709";
        String row16="4463	4757	201	186	3812	2413	2085	4685	5294	5755	2898	200	5536	5226	1028	180";

        int sumTotal = splitAndFindMaxMin(row1) + splitAndFindMaxMin(row2)
                + splitAndFindMaxMin(row3) + splitAndFindMaxMin(row4)
                + splitAndFindMaxMin(row5) + splitAndFindMaxMin(row6)
                + splitAndFindMaxMin(row7) + splitAndFindMaxMin(row8)
                + splitAndFindMaxMin(row9) + splitAndFindMaxMin(row10)
                + splitAndFindMaxMin(row11) + splitAndFindMaxMin(row12)
                + splitAndFindMaxMin(row13) + splitAndFindMaxMin(row14)
                + splitAndFindMaxMin(row15) + splitAndFindMaxMin(row16);
        System.out.println("sumTotal: " + sumTotal);

        int sumTotalEvenlyDivisible = splitAndFindEvenlyDivisible(row1) + splitAndFindEvenlyDivisible(row2) + splitAndFindEvenlyDivisible(row3)
                + splitAndFindEvenlyDivisible(row4) + splitAndFindEvenlyDivisible(row5) + splitAndFindEvenlyDivisible(row6)
                + splitAndFindEvenlyDivisible(row7) + splitAndFindEvenlyDivisible(row8) + splitAndFindEvenlyDivisible(row9)
                + splitAndFindEvenlyDivisible(row10) + splitAndFindEvenlyDivisible(row11) + splitAndFindEvenlyDivisible(row12)
                + splitAndFindEvenlyDivisible(row13)  + splitAndFindEvenlyDivisible(row15) + splitAndFindEvenlyDivisible(row16)
                + splitAndFindEvenlyDivisible(row14);
        System.out.println("sumTotalEvenlyDivisible: " + sumTotalEvenlyDivisible);

    }

    public static int splitAndFindMaxMin(String row) {
        String [] array1= row.split("\t");
        int max = 0;
        int min = Integer.parseInt(array1[0]);
        for (int i=0;i<array1.length;i++){
            if(Integer.parseInt(array1[i]) > max){
                max = Integer.parseInt(array1[i]);
            }
            if(Integer.parseInt(array1[i])<=min){
                min =Integer.parseInt(array1[i]);
            }
        }
        int difference = max-min;
        System.out.println("max: " + max + " min: " + min);
        System.out.println("max-min: " + difference);
        return difference;
    }

    public static int splitAndFindEvenlyDivisible(String row){
        String [] array1= row.split("\t");
        int first = -1;
        int second = -1;
        for(int i=0; i<array1.length; i++){
            for(int j=1; j<array1.length; j++){
                if(Integer.parseInt(array1[j])%Integer.parseInt(array1[i])==0 && i!=j){
                    first = Integer.parseInt(array1[j]);
                    System.out.println("first: " + first);
                    second = Integer.parseInt(array1[i]);
                    System.out.println("second: " + second);
                }
            }
        }
        System.out.println("first: " + first + " divided by second: " + second + " = " + first/second);
        return first/second;
    }

}

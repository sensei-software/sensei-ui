<?php

$nl="\n";
$hr="--------------------------------------------------------------------------------$nl";

function printTable($data,$headers=null){
	if(!$data) return;
        $h="<table cellspacing=\"0\">";
        if(isset($headers)){            
                $colspan="";
                $h.= "<tr>";            
                for($j=0;$j<count($headers);$j++){
                        if(count($headers)<count($data[0]) && $j==(count($headers)-1)){
                                $colspan = " colspan=\"".(count($data[0])-count($headers))."\" ";
                        }
                        $h.= "<th$colspan>".$headers[$j]."</th>";
                }
                $h.= "</tr>";           
        }
        for($i=0;$i<count($data);$i++){
                $h.= "<tr>";            
                for($j=0;$j<count($data[$i])/2;$j++){		
                        $h.= "<td>".$data[$i][$j]."</td>";
                }
                $h.= "</tr>";
        }
        $h.= "</table>";

        return $h;
}
function printGraphTable($data,$headers=null,$type='area',$title){
				if(!$data) return;
        $h="<table class=\"highchart\" cellspacing=\"0\" 
		data-graph-height=\"300\" 
		data-graph-legend-x=\"0\" 
		data-graph-legend-y=\"0\" 
		data-graph-xaxis-rotation=\"-45\" 
		data-graph-margin-top=\"30\"
		data-graph-margin-bottom=\"120\" 
		data-graph-container-before=\"1\" 
		data-graph-type=\"$type\" 
		data-graph-subtitle-text=\"$title\" 
		>";
        if(isset($headers)){            
		$h.= "<thead>";
                $colspan="";
                $h.= "<tr>";            
                for($j=0;$j<count($headers);$j++){
                        if(count($headers)<count($data[0]) && $j==(count($headers)-1)){
                                $colspan = " colspan=\"".(count($data[0])-count($headers))."\" ";
                        }
                        $h.= "<th$colspan data-graph-stack-group=\"".$headers[$j]."\" >".$headers[$j]."</th>";
                }
                $h.= "</tr>";     
		$h.= "</thead>";		
        }
	$h.= "<tbody>";           
        for($i=0;$i<count($data);$i++){
                $h.= "<tr>";            
                for($j=0;$j<count($data[$i])/2;$j++){		
                        $h.= "<td>".str_replace(",","",$data[$i][$j])."</td>";
                }
                $h.= "</tr>";
        }
	$h.= "</tbody>";
        $h.= "</table>";
	
        return $h;
}
function printArray($data,$headers=null){
				if(!$data) return;
        $h="<table cellspacing=\"0\">";
        if(isset($headers)){            
                $colspan="";
                $h.= "<tr>";            
                for($j=0;$j<count($headers);$j++){
                        if(count($headers)<count($data[0]) && $j==(count($headers)-1)){
                                $colspan = " colspan=\"".(count($data[0])-count($headers))."\" ";
                        }
                        $h.= "<th$colspan>".$headers[$j]."</th>";
                }
                $h.= "</tr>";           
        }
        for($i=0;$i<count($data);$i++){
                $h.= "<tr>";            
                for($j=0;$j<count($data[$i]);$j++){		
                        $h.= "<td>".$data[$i][$j]."</td>";
                }
                $h.= "</tr>";
        }
        $h.= "</table>";

        return $h;
}
function print_t($data){
	if (!count($data)) return;
	$max=Array();
	foreach($data as $row){		
		for($i=0;$i<count($row)/2;$i++){
			$t=preg_replace("/\n/","\\n",$row[$i],-1);
			$t=preg_replace("/\t/"," ",$t,-1);
			if(!isset($max[$i])||mb_strlen($t,"UTF-8")>$max[$i])
				$max[$i]=mb_strlen($t,"UTF-8");
		};
	}
	foreach($data as $row){		
		for($i=0;$i<count($row)/2;$i++){			
			$t=preg_replace("/\n/","\\n",$row[$i],-1);
			$t=preg_replace("/\t/"," ",$t,-1);
			echo " | ".mb_str_pad($t,$max[$i]+1);
		}  echo "  \n";
	}
	
}
function mb_str_pad( $input, $pad_length, $pad_string = ' ', $pad_type = STR_PAD_RIGHT, $encoding="UTF-8") {
    $diff = strlen( $input ) - mb_strlen($input, $encoding);
    return str_pad( $input, $pad_length + $diff, $pad_string, $pad_type );
}


function print_ta($data) {
	print_t($data);	
}
?>

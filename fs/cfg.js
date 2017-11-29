<!--
function FindAndSelect(selectBox, value)
{
  var i = 0;
  for(i = 0; i < selectBox.length; i++)
  {
    if(selectBox.options[i].value == value)
    {
      selectBox.selectedIndex = i;
      return;
    }
  }
}
function FindNearestAndSelect(selectBox, value)
{
  var i = 0;
  var min;
  var max;

  for(i = 0; i < selectBox.length; i++)
  {
    min = (value * 90) / 100;
    max = (value * 110) / 100;

    if((selectBox.options[i].value > min) && (selectBox.options[i].value < max))
    {
      selectBox.selectedIndex = i;
      return;
    }
  }
}
function SetFormDefaults()
{
	//FindNearestAndSelect(document.config.br, br);
	document.config.br.value = br;
	FindAndSelect(document.config.stop, sb);
	FindAndSelect(document.config.bc, bc);
	FindAndSelect(document.config.flow, fc);
	FindAndSelect(document.config.parity, par);
	FindAndSelect(document.config.tnmode, tnm);
	FindAndSelect(document.config.mbtp, mbt1); 
	document.config.tto.value = tt;
	document.config.tlp.value = tlp;
	document.config.trp.value = trp;
	document.config.tim.value =tim;
	document.config.num.value =num;
	document.config.tcpstx.value =tcpstx;
	//document.config.srf.value = srf;
	// note: checkbox is only submitted when checked; otherwise no submit
	// value is meaningless
	if(srf == 1)
	{
		document.config.srf.checked = true;	
	}
	else
	{
		document.config.srf.checked = false;
		//document.config.srf.value = 1;
	}
  
  	SetIPState();
}

function SetIPState()
{
	var tnmode = document.config.tnmode.value;
	var disable;

	if((tnmode == 0)||(tnmode == 1)||(tnmode == 2)||(tnmode == 4)||(tnmode == 5)) //udp mode, tcp client, UDP server, httpd client, TCP Auto
	{
		disable = false;
	}
	else
	{
		disable = true;
	}
	document.config.trp.disabled = disable;
	document.config.tto.disabled = true;
	document.config.url1.disabled = disable;

	if((tnmode == 1)||(tnmode == 3)) //tcp client, tcp server
	{
		disable = false;
	}
	else
	{
		disable = true;
		FindAndSelect(document.config.mbtp, 0);
	}
	document.config.mbtp.disabled = disable;

	if(tnmode != 3)
	{
		document.getElementById("tcps1").style.display="none";
	}
	else
	{
	    document.getElementById("tcps1").style.display="table-row";//"block";
	}
	if(tnmode != 4)
	{
		document.getElementById("hpdh1").style.display="none";
	}
	else
	{
	    document.getElementById("hpdh1").style.display="table-row";
	}	
}
//-->

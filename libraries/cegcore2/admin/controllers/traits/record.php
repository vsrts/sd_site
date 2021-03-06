<?php
/**
* COMPONENT FILE HEADER
**/
namespace G2\A\C\T;
/* @copyright:ChronoEngine.com @license:GPLv2 */defined('_JEXEC') or die('Restricted access');
defined("GCORE_SITE") or die;
trait Record {
	
	function toggleRecord($Model, $msgs = [], $url = ''){
		$result = $Model->where($Model->pkey, $this->data('gcb'))->update([$this->data('fld') => $this->data('val')]);
		
		if($result !== false){
			\GApp::session()->flash('success', !empty($msgs[0]) ? $msgs[0] : rl('Updated successfully.'));
		}else{
			\GApp::session()->flash('error', !empty($msgs[1]) ? $msgs[1] : rl('Update error.'));
		}
		
		if(empty($url)){
			$url = r2('index.php?ext='.\GApp::instance()->extension.'&cont='.\GApp::instance()->controller);
		}
		
		$this->redirect($url);
	}
	
	function deleteRecord($Model, $msgs = [], $url = ''){
		if(is_array($this->data('gcb'))){
			
			$result = $Model->where('id', $this->data('gcb'), 'in')->delete();
			
			if($result !== false){
				\GApp::session()->flash('success', !empty($msgs[0]) ? $msgs[0] : rl('Deleted successfully.'));
			}else{
				\GApp::session()->flash('error', !empty($msgs[1]) ? $msgs[1] : rl('Delete error.'));
			}
		}
		
		if(empty($url)){
			$url = r2('index.php?ext='.\GApp::instance()->extension.'&cont='.\GApp::instance()->controller);
		}
		
		$this->redirect($url);
	}
	
}
?>
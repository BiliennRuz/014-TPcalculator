<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CalculatriceController extends AbstractController
{
    /**
     * @Route("/calculatrice", name="app_calculatrice")
     */
    public function index(Request $request): Response
    {

        //$exp = $request->query->get("exp");
        $exp = $request->request->get("exp");
        $result = "";
        if(isset($exp)){
            $result = eval("return $exp;");
        }

        return $this->render('calculatrice/index.html.twig',
        ["result"=>$result]
    );
    }
}

from django.http import HttpResponse
from django.shortcuts import render


def homePage(request):
    items={
       'products':['WaiWai','Dew','VitaMilk','Zing Noodles','CheeseBalls' ],
       'price':[
           {'name':'WaiWai','price':20},
           {'name':'Vitamilk','price':10},
           {'name':'Zing','price':20},
           {'name':'CheeseBalls','price':20},
           {'name':'Dew','price':250},
       ]
    }
    return render(request, "index.html",items)
def aboutus(request):
    return HttpResponse("<b>Welcome to GaidaDuniya</b>")

def gaidaRank(request, gaidaRank):
    return HttpResponse(gaidaRank)
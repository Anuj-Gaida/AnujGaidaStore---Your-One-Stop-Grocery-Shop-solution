from django.http import HttpResponse, HttpResponseRedirect
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
    return render(request, "aboutus.html")
def contact(request):
    return render(request, "contact.html")

def register(request):
    try:
        if request.method == 'POST':
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            email = request.POST.get('email')
            password = request.POST.get('password')
            confirm_password = request.POST.get('confirm_password')
            phone = request.POST.get('phone_number')
            return HttpResponseRedirect('/aboutus/')
    except:
        pass
    return render(request, "form.html")
def gaidaRank(request, gaidaRank):
    return HttpResponse(gaidaRank)